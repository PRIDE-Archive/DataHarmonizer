/**
 * Download phac_dexa grid mapped to GRDI format.
 * @param {String} baseName Basename of downloaded file.
 * @param {Object} hot Handonstable grid instance.
 * @param {Object} data See `data.js`.
 * @param {Object} xlsx SheetJS variable.
 */
var exportGRDI = (baseName, hot, data, xlsx) => {
  // ExportHeaders is an array because it can happen, as below with 'Address',
  // that a column name appears two or more times.
  const ExportHeaders = [
    'sample_name',
    'alternative_sample_ID',
    'geo_loc (country)',
    'geo_loc (state/province/region)',
    'environmental_site',
    'collection_date',
    'collected_by',
    'collection_device',
    'host (common name)',
    'anatomical_part',
    'anatomical_material',
    'body_product',
    'environmental_material',
    'food_product',
    'sample_collector_contact_email',
    'organism',
    'animal_or_plant_population',
    'laboratory_name',
    'serovar',
    'serotyping_method',
    'phagetype',
    'purpose_of_sampling',
  ];


  // Create a map of Export format headers to template's fields. It is a 
  // one-to-many relationship, with indices representing the maps.
  const headerMap = {};
  for (const [HeaderIndex, _] of ExportHeaders.entries()) {
    headerMap[HeaderIndex] = [];
  }
  const fields = getFields(data);
  const fieldNameMap = {};
  for (const [fieldIndex, field] of fields.entries()) {
    fieldNameMap[field.fieldName] = fieldIndex;

    if (field.EXPORT_GRDI) {
      let HeaderIndex = ExportHeaders.indexOf(field.EXPORT_GRDI);
      headerMap[HeaderIndex].push(fieldIndex);
    }

  };



  // Create an export table with target format's headers and remaining rows of data
  const matrix = [ExportHeaders];
  const unmappedMatrix = getTrimmedData(hot);
  for (const unmappedRow of unmappedMatrix) {

    RuleDB = convertDexaToGRDI(unmappedRow, fieldNameMap)

    const mappedRow = [];
    for (const [HeaderIndex, HeaderName] of ExportHeaders.entries()) {

      if (HeaderName in RuleDB) {
        mappedRow.push(RuleDB[HeaderName])
        continue;
      }

      const mappedCell = [];
      for (const mappedFieldIndex of headerMap[HeaderIndex]) {
        let mappedCellVal = unmappedRow[mappedFieldIndex];
        if (!mappedCellVal) continue;
        mappedCell.push(mappedCellVal);
      }
      mappedRow.push(mappedCell.join(';'));
    }
    matrix.push(mappedRow);
  }

  runBehindLoadingScreen(exportFile, [matrix, baseName, 'xls', xlsx]);
}


var convertDexaToGRDI = (vocabulary, dataRow, fieldNameMap) => {
  // Rule-based target field initialization
  let RuleDB = {
    // Target fields/variables to populate with content
    'anatomical_part':           '',
    'anatomical_material':       '',
    'body_product':              '',
    'environmental_material':    '',
    'environmental_site':        '',
    'food_product':              '',
    'collection_device':         '',
    'animal_or_plant_population':'',

    // Source fields and their content
    'STTYPE':               dataRow[fieldNameMap['STTYPE']],
    'STYPE':                dataRow[fieldNameMap['STYPE']],
    'SPECIMENSUBSOURCE_1':  dataRow[fieldNameMap['SPECIMENSUBSOURCE_1']],
    'COMMODITY':            dataRow[fieldNameMap['COMMODITY']],
    'SPECIES':              dataRow[fieldNameMap['SPECIES']],
    'SUBJECT_DESCRIPTIONS': dataRow[fieldNameMap['SUBJECT_DESCRIPTIONS']]
  };

  // Check to see if value is in vocabulary of given select field, and if it
  // has a mapping for export to a GRDI target field above, then set target
  // to value.
  for (field in ['STTYPE', 'STYPE', 'SPECIMENSUBSOURCE_1', 'SUBJECT_DESCRIPTIONS', 'SPECIES', 'COMMODITY']) {
    let value = dataRow[fieldNameMap[field]];
    if (value.length) {
      if (value in fields[field].vocabulary) {
        let term = fields[field].vocabulary[value];
        if ('FIELD_MAP' in term and 'GRDI' in term['FIELD_MAP']) {
          let mapping = term['FIELD_MAP']['GRDI'];
          if (mapping in RuleDB) {
            RuleDB[mapping] = value;
          }
        }
      }
    }
  }


  // STTYPE: ANIMAL ENVIRONMENT FOOD HUMAN PRODUCT QA UNKNOWN
  switch (RuleDB.STTYPE) {
    // BEGIN ANIMAL
    case 'ANIMAL': {
      // BEGIN SPECIMENSUBSOURCE_1
      switch (RuleDB.SPECIMENSUBSOURCE_1) {
        case 'Spleen':
        case 'Joint':
        case 'Heart':
        case 'Intestine':
        case 'Mixed organs':
        case 'Cecum':
        case 'Anal gland':
        case 'Yolk sac':
        case 'Cloacae':
        case 'Ileum':
        case 'Colon':
        case 'Liver':
        case 'Crop' :
          RuleDB.anatomical_part = RuleDB.SPECIMENSUBSOURCE_1;
          break;

        case 'Feces' : 
        case 'Meconium' :
          RuleDB.body_product = RuleDB.SPECIMENSUBSOURCE_1;
          break;

        case 'Cecal content' : 
        case 'Blood' : 
        case 'Joint fluid' :
          RuleDB.anatomical_material = RuleDB.SPECIMENSUBSOURCE_1;
          break;
        case 'Dust' :
        case 'Fluff' :
        case 'Rinse' :
        case 'Manure' :
          RuleDB.environmental_material = RuleDB.SPECIMENSUBSOURCE_1;
          break;
        case 'Wall' :
        case 'Feeders and Drinkers' :
        case 'Manure pit' :
        case 'Fan' :
        case 'Egg belt' :
        case 'Chick pad' :
        case 'Watering bowl' :
        case 'Equipment' :
          RuleDB.environmental_site = RuleDB.SPECIMENSUBSOURCE_1;
          break;

        case 'Environmental swab (Hatchery)':
          RuleDB.collection_device = 'swab';
          RuleDB.environmental_site = 'hatchery';
          break;

        default: 
          break; // Prevents advancing to COMMODITY
      };
      // END SPECIMENSUBSOURCE_1

      // BEGIN COMMODITY
      switch (RuleDB.COMMODITY) {
        case 'Pet/Zoo' :
          RuleDB.environmental_site = RuleDB.COMMODITY;
      };
      // END COMMODITY

      break; // prevents advancing to FOOD
      
    };
    // END ANIMAL

    // BEGIN FOOD
    case 'FOOD' : {
      switch (RuleDB.SPECIES) {
        // NO BREAK - ENABLE food_product value enhancement 
        case 'Chicken' :
        case 'Turkey' :
        case 'Pig' :
          RuleDB.food_product += RuleDB.SPECIES;
      };

      switch (RuleDB.SUBJECT_DESCRIPTIONS) {
        case 'Breast skinless' :
        case 'Ground' :
        case 'Drumstick' :
        case 'Thigh with skin' :
        case 'Wing' :
        case 'Upper thigh' :
          RuleDB.food_product += (' ' + RuleDB.SUBJECT_DESCRIPTIONS);
      };

      break; // prevents advancing to blank/UNKNOWN
    };

    case '':
    case 'UNKNOWN': {// no <n/a>
      switch (RuleDB.STYPE) {
        case 'Cereal':
          RuleDB.food_product += RuleDB.STYPE;
      };
      break;
    };

    case 'ENVIRONMENT':
      switch (RuleDB.STYPE) {
        case 'Manure':
          RuleDB.environmental_material = RuleDB.STYPE;
      };
      break;

    case 'PRODUCT':
      switch (RuleDB.STYPE) {
        case 'Feed & ingredients':
        case 'Fertilizer': {
          switch (RuleDB.SUBJECT_DESCRIPTIONS) {
            case 'Fish meal':
            case 'Feather meal':
            case 'Starter ration':
              RuleDB.food_product += RuleDB.SUBJECT_DESCRIPTIONS;
              break;
            case 'Avian ingredients':
              // ISSUE: how to incorporate "feed (food_product)"
              RuleDB.food_product += RuleDB.SUBJECT_DESCRIPTIONS;
              break;
          };
        };
      };
      break;

    default: // Any other STTYPE Value:

      switch (RuleDB.STYPE) {
        case 'Porcine':
        case 'Avian':
        case 'Crustacean': {
          switch (RuleDB.COMMODITY) {
            case 'Beef':
            case 'Broiler':
            case 'Shrimp':
              RuleDB.food_product += RuleDB.COMMODITY;
          };
        };
      };
      break;
  };

  if (RuleDB.collection_device = 'swab' && RuleDB.environmental_site.length > 0) {
    switch (RuleDB.SPECIES) {
      case 'Turkey':
        RuleDB.animal_or_plant_population = RuleDB.SPECIES;
    };
  };

  return RuleDB;
};

// A list of the above functions keyed by the Export menu name they should appear as:
var EXPORT_FORMATS = {
  "Dexa to GRDI": exportGRDI
};
