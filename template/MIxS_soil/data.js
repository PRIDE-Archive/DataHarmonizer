var DATA = [
  {
    "id": "http://w3id.org/mixs/soil",
    "name": "soil",
    "imports": [
      "linkml:types",
      "terms"
    ],
    "prefixes": {
      "linkml": "https://w3id.org/linkml/",
      "mixs.vocab": "https://w3id.org/mixs/vocab/",
      "MIXS": "https://w3id.org/mixs/terms/"
    },
    "default_prefix": "mixs.vocab",
    "slots": {},
    "classes": {
      "soil": {
        "description": "soil",
        "mappings": [],
        "slots": [
          "lat_lon",
          "depth",
          "alt",
          "elev",
          "temp",
          "geo_loc_name",
          "collection_date",
          "env_broad_scale",
          "env_local_scale",
          "env_medium",
          "cur_land_use",
          "cur_vegetation",
          "cur_vegetation_meth",
          "previous_land_use",
          "prev_land_use_meth",
          "crop_rotation",
          "agrochem_addition",
          "tillage",
          "fire",
          "flooding",
          "extreme_event",
          "soil_horizon",
          "horizon_meth",
          "sieving",
          "water_content",
          "water_cont_soil_meth",
          "pool_dna_extracts",
          "store_cond",
          "link_climate_info",
          "annual_temp",
          "season_temp",
          "annual_precpt",
          "season_precpt",
          "link_class_info",
          "fao_class",
          "local_class",
          "local_class_meth",
          "soil_type",
          "soil_type_meth",
          "slope_gradient",
          "slope_aspect",
          "profile_position",
          "drainage_class",
          "soil_text_measure",
          "soil_texture_meth",
          "ph",
          "ph_meth",
          "tot_org_carb",
          "tot_org_c_meth",
          "tot_nitro_content",
          "tot_nitro_cont_meth",
          "microbial_biomass",
          "micro_biomass_meth",
          "link_addit_analys",
          "extreme_salinity",
          "salinity_meth",
          "heavy_metals",
          "heavy_metals_meth",
          "al_sat",
          "al_sat_meth",
          "misc_param"
        ],
        "slot_usage": {
          "samp_name": {
            "required": true
          },
          "project_name": {
            "required": true
          },
          "depth": {
            "required": true
          },
          "elev": {
            "required": true
          },
          "cur_land_use": {
            "required": false
          },
          "cur_vegetation": {
            "required": false
          },
          "cur_vegetation_meth": {
            "required": false
          },
          "previous_land_use": {
            "required": false
          },
          "prev_land_use_meth": {
            "required": false
          },
          "crop_rotation": {
            "required": false
          },
          "agrochem_addition": {
            "required": false
          },
          "tillage": {
            "required": false
          },
          "fire": {
            "required": false
          },
          "flooding": {
            "required": false
          },
          "extreme_event": {
            "required": false
          },
          "soil_horizon": {
            "required": false
          },
          "horizon_meth": {
            "required": false
          },
          "sieving": {
            "required": false
          },
          "water_content": {
            "required": false
          },
          "water_cont_soil_meth": {
            "required": false
          },
          "samp_vol_we_dna_ext": {
            "required": false
          },
          "pool_dna_extracts": {
            "required": false
          },
          "store_cond": {
            "required": false
          },
          "link_climate_info": {
            "required": false
          },
          "annual_temp": {
            "required": false
          },
          "season_temp": {
            "required": false
          },
          "annual_precpt": {
            "required": false
          },
          "season_precpt": {
            "required": false
          },
          "link_class_info": {
            "required": false
          },
          "fao_class": {
            "required": false
          },
          "local_class": {
            "required": false
          },
          "local_class_meth": {
            "required": false
          },
          "soil_type": {
            "required": false
          },
          "soil_type_meth": {
            "required": false
          },
          "slope_gradient": {
            "required": false
          },
          "slope_aspect": {
            "required": false
          },
          "profile_position": {
            "required": false
          },
          "drainage_class": {
            "required": false
          },
          "soil_text_measure": {
            "required": false
          },
          "soil_texture_meth": {
            "required": false
          },
          "ph": {
            "required": false
          },
          "ph_meth": {
            "required": false
          },
          "tot_org_carb": {
            "required": false
          },
          "tot_org_c_meth": {
            "required": false
          },
          "tot_nitro_content": {
            "required": false
          },
          "tot_nitro_cont_meth": {
            "required": false
          },
          "microbial_biomass": {
            "required": false
          },
          "micro_biomass_meth": {
            "required": false
          },
          "link_addit_analys": {
            "required": false
          },
          "extreme_salinity": {
            "required": false
          },
          "salinity_meth": {
            "required": false
          },
          "heavy_metals": {
            "required": false
          },
          "heavy_metals_meth": {
            "required": false
          },
          "al_sat": {
            "required": false
          },
          "al_sat_meth": {
            "required": false
          },
          "misc_param": {
            "required": false
          }
        }
      }
    },
    "subsets": {},
    "enums": {}
  },
  {
    "id": "http://w3id.org/mixs/terms",
    "name": "terms",
    "imports": [
      "linkml:types",
      "ranges"
    ],
    "prefixes": {
      "linkml": "https://w3id.org/linkml/",
      "mixs.vocab": "https://w3id.org/mixs/vocab/",
      "MIXS": "https://w3id.org/mixs/terms/"
    },
    "default_prefix": "mixs.vocab",
    "slots": {
      "core field": {
        "abstract": true,
        "description": "basic fields"
      },
      "investigation field": {
        "abstract": true,
        "description": "field describing aspect of the investigation/study to which the sample belongs"
      },
      "nucleic acid sequence source field": {
        "abstract": true
      },
      "sequencing field": {
        "abstract": true
      },
      "mixs extension field": {
        "abstract": true
      },
      "environment field": {
        "abstract": true,
        "description": "field describing environmental aspect of a sample"
      },
      "submitted_to_insdc": {
        "is_a": "investigation field",
        "title": "submitted to insdc",
        "description": "Depending on the study (large-scale e.g. done with next generation sequencing technology, or small-scale) sequences have to be submitted to SRA (Sequence Read Archive), DRA (DDBJ Read Archive) or via the classical Webin/Sequin systems to Genbank, ENA and DDBJ. Although this field is mandatory, it is meant as a self-test field, therefore it is not necessary to include this field in contextual data submitted to databases",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes"
          }
        ],
        "comments": [
          "Expected value: boolean"
        ],
        "pattern": "{boolean}",
        "slot_uri": "MIXS:0000004"
      },
      "investigation_type": {
        "is_a": "investigation field",
        "title": "investigation type",
        "description": "Nucleic Acid Sequence Report is the root element of all MIGS/MIMS compliant reports as standardized by Genomic Standards Consortium. This field is either eukaryote,bacteria,virus,plasmid,organelle, metagenome,mimarks-survey, mimarks-specimen, metatranscriptome, single amplified genome, metagenome-assembled genome, or uncultivated viral genome",
        "range": "investigation_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "metagenome"
          }
        ],
        "comments": [
          "Expected value: eukaryote, bacteria_archaea, plasmid, virus, organelle, metagenome,mimarks-survey, mimarks-specimen, metatranscriptome, single amplified genome, metagenome-assembled genome, or uncultivated viral genomes"
        ],
        "pattern": "[eukaryote|bacteria_archaea|plasmid|virus|organelle|metagenome|metatranscriptome|mimarks-survey|mimarks-specimen|misag|mimag|miuvig]",
        "slot_uri": "MIXS:0000007"
      },
      "samp_name": {
        "is_a": "investigation field",
        "title": "sample name",
        "description": "A local identifier or name that for the material sample used for extracting nucleic acids, and subsequent sequencing. It can refer either to the original material collected or to any derived sub-samples. It can have any format, but we suggest that you make it concise, unique and consistent within your lab, and as informative as possible. INSDC requires every sample name from a single Submitter to be unique. Use of a globally unique identifier for the field source_mat_id is recommended in addition to sample_name.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "ISDsoil1"
          }
        ],
        "comments": [
          "Expected value: text",
          "This field is used in all packages"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0001107"
      },
      "samp_taxon_id": {
        "is_a": "investigation field",
        "title": "Taxonomy ID of DNA sample",
        "description": "NCBI taxon id of the sample.  Maybe be a single taxon or mixed taxa sample. Use 'synthetic metagenome\u2019 for mock community/positive controls, or 'blank sample' for negative controls.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Gut Metagenome [NCBI:txid749906]"
          }
        ],
        "comments": [
          "Expected value: Taxonomy ID"
        ],
        "pattern": "{text} [NCBI:txid]",
        "slot_uri": "MIXS:0001320"
      },
      "project_name": {
        "is_a": "investigation field",
        "title": "project name",
        "description": "Name of the project within which the sequencing was organized",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Forest soil metagenome"
          }
        ],
        "comments": [
          "This field is used in all packages"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000092"
      },
      "experimental_factor": {
        "is_a": "investigation field",
        "title": "experimental factor",
        "description": "Experimental factors are essentially the variable aspects of an experiment design which can be used to describe an experiment, or set of experiments, in an increasingly detailed manner. This field accepts ontology terms from Experimental Factor Ontology (EFO) and/or Ontology for Biomedical Investigations (OBI). For a browser of EFO (v 2.95) terms, please see http://purl.bioontology.org/ontology/EFO; for a browser of OBI (v 2018-02-12) terms please see http://purl.bioontology.org/ontology/OBI",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "time series design [EFO:EFO_0001779]"
          }
        ],
        "comments": [
          "Expected value: text or EFO and/or OBI"
        ],
        "pattern": "{termLabel} {[termID]}|{text}",
        "slot_uri": "MIXS:0000008"
      },
      "lat_lon": {
        "is_a": "environment field",
        "title": "geographic location (latitude and longitude)",
        "description": "The geographical origin of the sample as defined by latitude and longitude. The values should be reported in decimal degrees and in WGS84 system",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "50.586825 6.408977"
          }
        ],
        "comments": [
          "Expected value: decimal degrees,  limit to 8 decimal points"
        ],
        "pattern": "{float} {float}",
        "slot_uri": "MIXS:0000009"
      },
      "depth": {
        "is_a": "environment field",
        "title": "depth",
        "description": "The vertical distance below local surface, e.g. for sediment or soil samples depth is measured from sediment or soil surface, respectively. Depth can be reported as an interval for subsurface samples.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "10 meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "This field is used in: 8 packages: host-associated, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, soil, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000018"
      },
      "alt": {
        "is_a": "environment field",
        "title": "altitude",
        "description": "Altitude is a term used to identify heights of objects such as airplanes, space shuttles, rockets, atmospheric balloons and heights of places such as atmospheric layers and clouds. It is used to measure the height of an object which is above the earth's surface. In this context, the altitude measurement is the vertical distance between the earth's surface above sea level and the sampled position in the air",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "100 meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "This field is used in: 3 packages: air, host-associated, miscellaneous natural or artificial environment"
        ],
        "slot_uri": "MIXS:0000094"
      },
      "elev": {
        "is_a": "environment field",
        "title": "elevation",
        "description": "Elevation of the sampling site is its height above a fixed reference point, most commonly the mean sea level. Elevation is mainly used when referring to points on the earth's surface, while altitude is used for points above the surface, such as an aircraft in flight or a spacecraft in orbit.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "100 meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "This field is used in: 9 packages: air, host-associated, hydrocarbon resources-cores, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, soil, water"
        ],
        "slot_uri": "MIXS:0000093"
      },
      "temp": {
        "is_a": "environment field",
        "title": "temperature",
        "description": "Temperature of the sample at the time of sampling.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "25 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "This field is used in: 15 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000113"
      },
      "geo_loc_name": {
        "is_a": "environment field",
        "title": "geographic location (country and/or sea,region)",
        "description": "The geographical origin of the sample as defined by the country or sea name followed by specific region name. Country or sea names should be chosen from the INSDC country list (http://insdc.org/country.html), or the GAZ ontology (http://purl.bioontology.org/ontology/GAZ)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "USA: Maryland, Bethesda"
          }
        ],
        "comments": [
          "Expected value: country or sea name (INSDC or GAZ): region(GAZ), specific location name"
        ],
        "pattern": "{term}: {term}, {text}",
        "slot_uri": "MIXS:0000010"
      },
      "collection_date": {
        "is_a": "environment field",
        "title": "collection date",
        "description": "The time of sampling, either as an instance (single point in time) or interval. In case no exact time is available, the date/time can be right truncated i.e. all of these are valid times: 2008-01-23T19:23:10+00:00; 2008-01-23T19:23:10; 2008-01-23; 2008-01; 2008; Except: 2008-01; 2008 all are ISO8601 compliant",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11T10:00:00+01:00; 2018-05-11"
          }
        ],
        "comments": [
          "Expected value: date and time"
        ],
        "slot_uri": "MIXS:0000011"
      },
      "neg_cont_type": {
        "is_a": "investigation field",
        "title": "negative control type",
        "description": "The substance or equipment used as a negative control in an investigation",
        "range": "neg_cont_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: enumeration or text"
        ],
        "pattern": "[distilled water|phosphate buffer|empty collection device|empty collection tube|DNA-free PCR mix|sterile swab |sterile syringe]",
        "slot_uri": "MIXS:0001321"
      },
      "pos_cont_type": {
        "is_a": "investigation field",
        "title": "positive control type",
        "description": "The substance, mixture, product, or apparatus used to verify that a process which is part of an investigation delivers a true positive.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [],
        "pattern": "{term} or {text}",
        "slot_uri": "MIXS:0001322"
      },
      "env_broad_scale": {
        "is_a": "environment field",
        "title": "broad-scale environmental context",
        "description": "Report the major environmental system the sample or specimen came from. The system(s) identified should have a coarse spatial grain, to provide the general environmental context of where the sampling was done (e.g. in the desert or a rainforest). We recommend using subclasses of EnvO\u2019s biome class:  http://purl.obolibrary.org/obo/ENVO_00000428. EnvO documentation about how to use the field: https://github.com/EnvironmentOntology/envo/wiki/Using-ENVO-with-MIxS",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "oceanic epipelagic zone biome [ENVO:01000033] for annotating a water sample from the photic zone in middle of the Atlantic Ocean"
          }
        ],
        "comments": [
          "Expected value: The major environment type(s) where the sample was collected. Recommend subclasses of biome [ENVO:00000428]. Multiple terms can be separated by one or more pipes."
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000012"
      },
      "env_local_scale": {
        "is_a": "environment field",
        "title": "local environmental context",
        "description": "Report the entity or entities which are in the sample or specimen\u2019s local vicinity and which you believe have significant causal influences on your sample or specimen. We recommend using EnvO terms which are of smaller spatial grain than your entry for env_broad_scale. Terms, such as anatomical sites, from other OBO Library ontologies which interoperate with EnvO (e.g. UBERON) are accepted in this field. EnvO documentation about how to use the field: https://github.com/EnvironmentOntology/envo/wiki/Using-ENVO-with-MIxS.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "litter layer [ENVO:01000338]; Annotating a pooled sample taken from various vegetation layers in a forest consider: canopy [ENVO:00000047]|herb and fern layer [ENVO:01000337]|litter layer [ENVO:01000338]|understory [01000335]|shrub layer [ENVO:01000336]."
          }
        ],
        "comments": [
          "Expected value: Environmental entities having causal influences upon the entity at time of sampling."
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000013"
      },
      "env_medium": {
        "is_a": "environment field",
        "title": "environmental medium",
        "description": "Report the environmental material(s) immediately surrounding the sample or specimen at the time of sampling. We recommend using subclasses of 'environmental material' (http://purl.obolibrary.org/obo/ENVO_00010483). EnvO documentation about how to use the field: https://github.com/EnvironmentOntology/envo/wiki/Using-ENVO-with-MIxS . Terms from other OBO ontologies are permissible as long as they reference mass/volume nouns (e.g. air, water, blood) and not discrete, countable entities (e.g. a tree, a leaf, a table top).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "soil [ENVO:00001998]; Annotating a fish swimming in the upper 100 m of the Atlantic Ocean, consider: ocean water [ENVO:00002151]. Example: Annotating a duck on a pond consider: pond water [ENVO:00002228]|air [ENVO_00002005]"
          }
        ],
        "comments": [
          "Expected value: The material displaced by the entity at time of sampling. Recommend subclasses of environmental material [ENVO:00010483]."
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000014"
      },
      "env_package": {
        "is_a": "mixs extension field",
        "title": "environmental package",
        "description": "MIxS extension for reporting of measurements and observations obtained from one or more of the environments where the sample was obtained. All environmental packages listed here are further defined in separate subtables. By giving the name of the environmental package, a selection of fields can be made from the subtables and can be reported",
        "range": "env_package_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "soil"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[air|built environment|host-associated|human-associated|human-skin|human-oral|human-gut|human-vaginal|hydrocarbon resources-cores|hydrocarbon resources-fluids/swabs|microbial mat/biofilm|misc environment|plant-associated|sediment|soil|wastewater/sludge|water]",
        "slot_uri": "MIXS:0000019"
      },
      "subspecf_gen_lin": {
        "is_a": "nucleic acid sequence source field",
        "title": "subspecific genetic lineage",
        "description": "Information about the genetic distinctness of the sequenced organism below the subspecies level, e.g., serovar, serotype, biotype, ecotype, or any relevant genetic typing schemes like Group I plasmid. Subspecies should not be recorded in this term, but in the NCBI taxonomy. Supply both the lineage name and the lineage rank separated by a colon, e.g., biovar:abc123.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "serovar:Newport"
          }
        ],
        "comments": [
          "Expected value: Genetic lineage below lowest rank of NCBI taxonomy, which is subspecies, e.g. serovar, biotype, ecotype."
        ],
        "pattern": "{rank name}:{text}",
        "slot_uri": "MIXS:0000020"
      },
      "ploidy": {
        "is_a": "nucleic acid sequence source field",
        "title": "ploidy",
        "description": "The ploidy level of the genome (e.g. allopolyploid, haploid, diploid, triploid, tetraploid). It has implications for the downstream study of duplicated gene and regions of the genomes (and perhaps for difficulties in assembly). For terms, please select terms listed under class ploidy (PATO:001374) of Phenotypic Quality Ontology (PATO), and for a browser of PATO (v 2018-03-27) please refer to http://purl.bioontology.org/ontology/PATO",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "allopolyploidy [PATO:0001379]"
          }
        ],
        "comments": [
          "Expected value: PATO"
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000021"
      },
      "num_replicons": {
        "is_a": "nucleic acid sequence source field",
        "title": "number of replicons",
        "description": "Reports the number of replicons in a nuclear genome of eukaryotes, in the genome of a bacterium or archaea or the number of segments in a segmented virus. Always applied to the haploid chromosome count of a eukaryote",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "2"
          }
        ],
        "comments": [
          "Expected value: for eukaryotes and bacteria: chromosomes (haploid count); for viruses: segments"
        ],
        "slot_uri": "MIXS:0000022"
      },
      "extrachrom_elements": {
        "is_a": "nucleic acid sequence source field",
        "title": "extrachromosomal elements",
        "description": "Do plasmids exist of significant phenotypic consequence (e.g. ones that determine virulence or antibiotic resistance). Megaplasmids? Other plasmids (borrelia has 15+ plasmids)",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "5"
          }
        ],
        "comments": [
          "Expected value: number of extrachromosmal elements"
        ],
        "slot_uri": "MIXS:0000023"
      },
      "estimated_size": {
        "is_a": "nucleic acid sequence source field",
        "title": "estimated size",
        "description": "The estimated size of the genome prior to sequencing. Of particular importance in the sequencing of (eukaryotic) genome which could remain in draft form for a long or unspecified period.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "300000 bp"
          }
        ],
        "comments": [
          "Expected value: number of base pairs"
        ],
        "pattern": "{integer} bp",
        "slot_uri": "MIXS:0000024"
      },
      "ref_biomaterial": {
        "is_a": "nucleic acid sequence source field",
        "title": "reference for biomaterial",
        "description": "Primary publication if isolated before genome publication; otherwise, primary genome report.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "doi:10.1016/j.syapm.2018.01.009"
          }
        ],
        "comments": [
          "Expected value: PMID, DOI or URL"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000025"
      },
      "source_mat_id": {
        "is_a": "nucleic acid sequence source field",
        "title": "source material identifiers",
        "description": "A unique identifier assigned to a material sample (as defined by http://rs.tdwg.org/dwc/terms/materialSampleID, and as opposed to a particular digital record of a material sample) used for extracting nucleic acids, and subsequent sequencing. The identifier can refer either to the original material collected or to any derived sub-samples. The INSDC qualifiers /specimen_voucher, /bio_material, or /culture_collection may or may not share the same value as the source_mat_id field. For instance, the /specimen_voucher qualifier and source_mat_id may both contain 'UAM:Herps:14' , referring to both the specimen voucher and sampled tissue with the same identifier. However, the /culture_collection qualifier may refer to a value from an initial culture (e.g. ATCC:11775) while source_mat_id would refer to an identifier from some derived culture from which the nucleic acids were extracted (e.g. xatc123 or ark:/2154/R2).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "MPI012345"
          }
        ],
        "comments": [
          "Expected value: for cultures of microorganisms: identifiers for two culture collections; for other material a unique arbitrary identifer"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000026"
      },
      "pathogenicity": {
        "is_a": "nucleic acid sequence source field",
        "title": "known pathogenicity",
        "description": "To what is the entity pathogenic",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "human, animal, plant, fungi, bacteria"
          }
        ],
        "comments": [
          "Expected value: names of organisms that the entity is pathogenic to"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000027"
      },
      "biotic_relationship": {
        "is_a": "nucleic acid sequence source field",
        "title": "observed biotic relationship",
        "description": "Description of relationship(s) between the subject organism and other organism(s) it is associated with. E.g., parasite on species X; mutualist with species Y. The target organism is the subject of the relationship, and the other organism(s) is the object",
        "range": "biotic_relationship_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "free living"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[free living|parasitism|commensalism|symbiotic|mutualism]",
        "slot_uri": "MIXS:0000028"
      },
      "specific_host": {
        "is_a": "nucleic acid sequence source field",
        "title": "host scientific name",
        "description": "Report the host's taxonomic name and/or NCBI taxonomy ID.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Homo sapiens and/or 9606"
          }
        ],
        "comments": [
          "Expected value: host scientific name, taxonomy ID"
        ],
        "pattern": "{text}|{NCBI taxid}",
        "slot_uri": "MIXS:0000029"
      },
      "host_spec_range": {
        "is_a": "nucleic acid sequence source field",
        "title": "host specificity or range",
        "description": "The range and diversity of host species that an organism is capable of infecting, defined by NCBI taxonomy identifier.",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "9606"
          }
        ],
        "comments": [
          "Expected value: NCBI taxid"
        ],
        "slot_uri": "MIXS:0000030"
      },
      "health_disease_stat": {
        "is_a": "nucleic acid sequence source field",
        "title": "health or disease status of specific host at time of collection",
        "description": "Health or disease status of specific host at time of collection",
        "range": "health_disease_stat_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "dead"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[healthy|diseased|dead|disease-free|undetermined|recovering|resolving|pre-existing condition|pathological|life threatening|congenital]",
        "slot_uri": "MIXS:0000031"
      },
      "host_disease_stat": {
        "is_a": "nucleic acid sequence source field",
        "title": "host disease status",
        "description": "List of diseases with which the host has been diagnosed; can include multiple diagnoses. The value of the field depends on host; for humans the terms should be chosen from the DO (Human Disease Ontology) at https://www.disease-ontology.org, non-human host diseases are free text",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "rabies [DOID:11260]"
          }
        ],
        "comments": [
          "Expected value: disease name or Disease Ontology term",
          "This field is used in: 7 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, plant-associated"
        ],
        "pattern": "{termLabel} {[termID]}|{text}",
        "slot_uri": "MIXS:0000031"
      },
      "trophic_level": {
        "is_a": "nucleic acid sequence source field",
        "title": "trophic level",
        "description": "Trophic levels are the feeding position in a food chain. Microbes can be a range of producers (e.g. chemolithotroph)",
        "range": "trophic_level_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "heterotroph"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[autotroph|carboxydotroph|chemoautotroph|chemoheterotroph|chemolithoautotroph|chemolithotroph|chemoorganoheterotroph|chemoorganotroph|chemosynthetic|chemotroph|copiotroph|diazotroph|facultative|autotroph|heterotroph|lithoautotroph|lithoheterotroph|lithotroph|methanotroph|methylotroph|mixotroph|obligate|chemoautolithotroph|oligotroph|organoheterotroph|organotroph|photoautotroph|photoheterotroph|photolithoautotroph|photolithotroph|photosynthetic|phototroph]",
        "slot_uri": "MIXS:0000032"
      },
      "propagation": {
        "is_a": "nucleic acid sequence source field",
        "title": "propagation",
        "description": "The type of reproduction from the parent stock. Values for this field is specific to different taxa. For phage or virus: lytic/lysogenic/temperate/obligately lytic. For plasmids: incompatibility group. For eukaryotes: sexual/asexual.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "lytic"
          }
        ],
        "comments": [
          "Expected value: for virus: lytic, lysogenic, temperate, obligately lytic; for plasmid: incompatibility group; for eukaryote: asexual, sexual; other more specific values (e.g., incompatibility group) are allowed"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000033"
      },
      "encoded_traits": {
        "is_a": "nucleic acid sequence source field",
        "title": "encoded traits",
        "description": "Should include key traits like antibiotic resistance or xenobiotic degradation phenotypes for plasmids, converting genes for phage",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "beta-lactamase class A"
          }
        ],
        "comments": [
          "Expected value: for plasmid: antibiotic resistance; for phage: converting genes"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000034"
      },
      "rel_to_oxygen": {
        "is_a": "nucleic acid sequence source field",
        "title": "relationship to oxygen",
        "description": "Is this organism an aerobe, anaerobe? Please note that aerobic and anaerobic are valid descriptors for microbial environments",
        "range": "rel_to_oxygen_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "aerobe"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[aerobe|anaerobe|facultative|microaerophilic|microanaerobe|obligate aerobe|obligate anaerobe]",
        "slot_uri": "MIXS:0000015"
      },
      "isol_growth_condt": {
        "is_a": "nucleic acid sequence source field",
        "title": "isolation and growth condition",
        "description": "Publication reference in the form of pubmed ID (pmid), digital object identifier (doi) or url for isolation and growth condition specifications of the organism/material",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "doi: 10.1016/j.syapm.2018.01.009"
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or URL"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000003"
      },
      "samp_collec_device": {
        "is_a": "nucleic acid sequence source field",
        "title": "sample collection device",
        "description": "The device used to collect an environmental sample. This field accepts terms listed under environmental sampling device (http://purl.obolibrary.org/obo/ENVO). This field also accepts terms listed under specimen collection device (http://purl.obolibrary.org/obo/GENEPIO_0002094).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "swab, biopsy, niskin bottle, push core, drag swab [GENEPIO:0002713]"
          }
        ],
        "comments": [
          "Expected value: device name"
        ],
        "pattern": "{termLabel} {[termID]}|{text}",
        "slot_uri": "MIXS:0000002"
      },
      "samp_collec_method": {
        "is_a": "nucleic acid sequence source field",
        "title": "sample collection method",
        "description": "The method employed for collecting the sample.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "swabbing"
          }
        ],
        "comments": [
          "Expected value: PMID,DOI,url , or text"
        ],
        "pattern": "{PMID}|{DOI}|{URL}|{text}",
        "slot_uri": "MIXS:0001225"
      },
      "samp_mat_process": {
        "is_a": "nucleic acid sequence source field",
        "title": "sample material processing",
        "description": "A brief description of any processing applied to the sample during or after retrieving the sample from environment, or a link to the relevant protocol(s) performed.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "filtering of seawater, storing samples in ethanol"
          }
        ],
        "comments": [
          "Expected value: text"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000016"
      },
      "size_frac": {
        "is_a": "nucleic acid sequence source field",
        "title": "size fraction selected",
        "description": "Filtering pore size used in sample preparation",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "0-0.22 micrometer"
          }
        ],
        "comments": [
          "Expected value: filter size value range"
        ],
        "pattern": "{float}-{float} {unit}",
        "slot_uri": "MIXS:0000017"
      },
      "samp_size": {
        "is_a": "nucleic acid sequence source field",
        "title": "amount or size of sample collected",
        "description": "The total amount or size (volume (ml), mass (g) or area (m2) ) of sample collected.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5 liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millliter, gram, milligram, liter"
        ],
        "slot_uri": "MIXS:0000001"
      },
      "samp_vol_we_dna_ext": {
        "is_a": "nucleic acid sequence source field",
        "title": "sample volume or weight for DNA extraction",
        "description": "Volume (ml) or mass (g) of total collected sample processed for DNA extraction. Note: total sample collected should be entered under the term Sample Size (MIXS:0000001).",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1500 milliliter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millliter, gram, milligram, square centimeter",
          "This field is used in: 16 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, soil, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000111"
      },
      "source_uvig": {
        "is_a": "nucleic acid sequence source field",
        "title": "source of UViGs",
        "description": "Type of dataset from which the UViG was obtained",
        "range": "source_uvig_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "viral fraction metagenome (virome)"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[metagenome (not viral targeted)|viral fraction metagenome (virome)|sequence-targeted metagenome|metatranscriptome (not viral targeted)|viral fraction RNA metagenome (RNA virome)|sequence-targeted RNA metagenome|microbial single amplified genome (SAG)|viral single amplified genome (vSAG)|isolate microbial genome|other]",
        "slot_uri": "MIXS:0000035"
      },
      "virus_enrich_appr": {
        "is_a": "nucleic acid sequence source field",
        "title": "virus enrichment approach",
        "description": "List of approaches used to enrich the sample for viruses, if any",
        "range": "virus_enrich_appr_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "filtration + FeCl Precipitation + ultracentrifugation + DNAse"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[filtration|ultrafiltration|centrifugation|ultracentrifugation|PEG Precipitation|FeCl Precipitation|CsCl density gradient|DNAse|RNAse|targeted sequence capture|other|none]",
        "slot_uri": "MIXS:0000036"
      },
      "nucl_acid_ext": {
        "is_a": "sequencing field",
        "title": "nucleic acid extraction",
        "description": "A link to a literature reference, electronic resource or a standard operating procedure (SOP), that describes the material separation to recover the nucleic acid fraction from a sample",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "https://mobio.com/media/wysiwyg/pdfs/protocols/12888.pdf"
          }
        ],
        "comments": [
          "Expected value: PMID, DOI or URL"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000037"
      },
      "nucl_acid_amp": {
        "is_a": "sequencing field",
        "title": "nucleic acid amplification",
        "description": "A link to a literature reference, electronic resource or a standard operating procedure (SOP), that describes the enzymatic amplification (PCR, TMA, NASBA) of specific nucleic acids",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "https://phylogenomics.me/protocols/16s-pcr-protocol/"
          }
        ],
        "comments": [
          "Expected value: PMID, DOI or URL"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000038"
      },
      "lib_size": {
        "is_a": "sequencing field",
        "title": "library size",
        "description": "Total number of clones in the library prepared for the project",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "50"
          }
        ],
        "comments": [
          "Expected value: number of clones"
        ],
        "slot_uri": "MIXS:0000039"
      },
      "lib_reads_seqd": {
        "is_a": "sequencing field",
        "title": "library reads sequenced",
        "description": "Total number of clones sequenced from the library",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "20"
          }
        ],
        "comments": [
          "Expected value: number of reads sequenced"
        ],
        "slot_uri": "MIXS:0000040"
      },
      "lib_layout": {
        "is_a": "sequencing field",
        "title": "library layout",
        "description": "Specify whether to expect single, paired, or other configuration of reads",
        "range": "lib_layout_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "paired"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[paired|single|vector|other]",
        "slot_uri": "MIXS:0000041"
      },
      "lib_vector": {
        "is_a": "sequencing field",
        "title": "library vector",
        "description": "Cloning vector type(s) used in construction of libraries",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Bacteriophage P1"
          }
        ],
        "comments": [
          "Expected value: vector"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000042"
      },
      "lib_screen": {
        "is_a": "sequencing field",
        "title": "library screening strategy",
        "description": "Specific enrichment or screening methods applied before and/or after creating libraries",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "enriched, screened, normalized"
          }
        ],
        "comments": [
          "Expected value: screening strategy name"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000043"
      },
      "target_gene": {
        "is_a": "sequencing field",
        "title": "target gene",
        "description": "Targeted gene or locus name for marker gene studies",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "16S rRNA, 18S rRNA, nif, amoA, rpo"
          }
        ],
        "comments": [
          "Expected value: gene name"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000044"
      },
      "target_subfragment": {
        "is_a": "sequencing field",
        "title": "target subfragment",
        "description": "Name of subfragment of a gene or locus. Important to e.g. identify special regions on marker genes like V6 on 16S rRNA",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "V6, V9, ITS"
          }
        ],
        "comments": [
          "Expected value: gene fragment name"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000045"
      },
      "pcr_primers": {
        "is_a": "sequencing field",
        "title": "pcr primers",
        "description": "PCR primers that were used to amplify the sequence of the targeted gene, locus or subfragment. This field should contain all the primers used for a single PCR reaction if multiple forward or reverse primers are present in a single PCR reaction. The primer sequence should be reported in uppercase letters",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "FWD:GTGCCAGCMGCCGCGGTAA;REV:GGACTACHVGGGTWTCTAAT"
          }
        ],
        "comments": [
          "Expected value: FWD: forward primer sequence;REV:reverse primer sequence"
        ],
        "pattern": "FWD:{dna};REV:{dna}",
        "slot_uri": "MIXS:0000046"
      },
      "mid": {
        "is_a": "sequencing field",
        "title": "multiplex identifiers",
        "description": "Molecular barcodes, called Multiplex Identifiers (MIDs), that are used to specifically tag unique samples in a sequencing run. Sequence should be reported in uppercase letters",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "GTGAATAT"
          }
        ],
        "comments": [
          "Expected value: multiplex identifier sequence"
        ],
        "pattern": "{dna}",
        "slot_uri": "MIXS:0000047"
      },
      "adapters": {
        "is_a": "sequencing field",
        "title": "adapters",
        "description": "Adapters provide priming sequences for both amplification and sequencing of the sample-library fragments. Both adapters should be reported; in uppercase letters",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "AATGATACGGCGACCACCGAGATCTACACGCT;CAAGCAGAAGACGGCATACGAGAT"
          }
        ],
        "comments": [
          "Expected value: adapter A and B sequence"
        ],
        "pattern": "{dna};{dna}",
        "slot_uri": "MIXS:0000048"
      },
      "pcr_cond": {
        "is_a": "sequencing field",
        "title": "pcr conditions",
        "description": "Description of reaction conditions and components of PCR in the form of 'initial denaturation:94degC_1.5min; annealing=...'",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "initial denaturation:94_3;annealing:50_1;elongation:72_1.5;final elongation:72_10;35"
          }
        ],
        "comments": [
          "Expected value: initial denaturation:degrees_minutes;annealing:degrees_minutes;elongation:degrees_minutes;final elongation:degrees_minutes;total cycles"
        ],
        "pattern": "initial denaturation:degrees_minutes;annealing:degrees_minutes;elongation:degrees_minutes;final elongation:degrees_minutes;total cycles",
        "slot_uri": "MIXS:0000049"
      },
      "seq_meth": {
        "is_a": "sequencing field",
        "title": "sequencing method",
        "description": "Sequencing machine used. Where possible the term should be taken from the OBI list of DNA sequencers (http://purl.obolibrary.org/obo/OBI_0400103).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "454 Genome Sequencer FLX [OBI:0000702]"
          }
        ],
        "comments": [
          "Expected value: Text or OBI"
        ],
        "pattern": "{termLabel} {[termID]}|{text}",
        "slot_uri": "MIXS:0000050"
      },
      "seq_quality_check": {
        "is_a": "sequencing field",
        "title": "sequence quality check",
        "description": "Indicate if the sequence has been called by automatic systems (none) or undergone a manual editing procedure (e.g. by inspecting the raw data or chromatograms). Applied only for sequences that are not submitted to SRA,ENA or DRA",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "none"
          }
        ],
        "comments": [
          "Expected value: none or manually edited"
        ],
        "pattern": "[none|manually edited]",
        "slot_uri": "MIXS:0000051"
      },
      "chimera_check": {
        "is_a": "sequencing field",
        "title": "chimera check software",
        "description": "Tool(s) used for chimera checking, including version number and parameters, to discover and remove chimeric sequences. A chimeric sequence is comprised of two or more phylogenetically distinct parent sequences.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "uchime;v4.1;default parameters"
          }
        ],
        "comments": [
          "Expected value: name and version of software, parameters used"
        ],
        "pattern": "{software};{version};{parameters}",
        "slot_uri": "MIXS:0000052"
      },
      "tax_ident": {
        "is_a": "sequencing field",
        "title": "taxonomic identity marker",
        "description": "The phylogenetic marker(s) used to assign an organism name to the SAG or MAG",
        "range": "tax_ident_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "other: rpoB gene"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[16S rRNA gene|multi-marker approach|other]",
        "slot_uri": "MIXS:0000053"
      },
      "assembly_qual": {
        "is_a": "sequencing field",
        "title": "assembly quality",
        "description": "The assembly quality category is based on sets of criteria outlined for each assembly quality category. For MISAG/MIMAG; Finished: Single, validated, contiguous sequence per replicon without gaps or ambiguities with a consensus error rate equivalent to Q50 or better. High Quality Draft:Multiple fragments where gaps span repetitive regions. Presence of the 23S, 16S and 5S rRNA genes and at least 18 tRNAs. Medium Quality Draft:Many fragments with little to no review of assembly other than reporting of standard assembly statistics. Low Quality Draft:Many fragments with little to no review of assembly other than reporting of standard assembly statistics. Assembly statistics include, but are not limited to total assembly size, number of contigs, contig N50/L50, and maximum contig length. For MIUVIG; Finished: Single, validated, contiguous sequence per replicon without gaps or ambiguities, with extensive manual review and editing to annotate putative gene functions and transcriptional units. High-quality draft genome: One or multiple fragments, totaling \u2265 90% of the expected genome or replicon sequence or predicted complete. Genome fragment(s): One or multiple fragments, totalling < 90% of the expected genome or replicon sequence, or for which no genome size could be estimated",
        "range": "assembly_qual_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "High-quality draft genome"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[Finished genome|High-quality draft genome|Medium-quality draft genome|Low-quality draft genome|Genome fragment(s)]",
        "slot_uri": "MIXS:0000056"
      },
      "assembly_name": {
        "is_a": "sequencing field",
        "title": "assembly name",
        "description": "Name/version of the assembly provided by the submitter that is used in the genome browsers and in the community",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "HuRef, JCVI_ISG_i3_1.0"
          }
        ],
        "comments": [
          "Expected value: name and version of assembly"
        ],
        "pattern": "{text} {text}",
        "slot_uri": "MIXS:0000057"
      },
      "assembly_software": {
        "is_a": "sequencing field",
        "title": "assembly software",
        "description": "Tool(s) used for assembly, including version number and parameters",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "metaSPAdes;3.11.0;kmer set 21,33,55,77,99,121, default parameters otherwise"
          }
        ],
        "comments": [
          "Expected value: name and version of software, parameters used"
        ],
        "pattern": "{software};{version};{parameters}",
        "slot_uri": "MIXS:0000058"
      },
      "annot": {
        "is_a": "sequencing field",
        "title": "annotation",
        "description": "Tool used for annotation, or for cases where annotation was provided by a community jamboree or model organism database rather than by a specific submitter",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "prokka"
          }
        ],
        "comments": [
          "Expected value: name of tool or pipeline used, or annotation source description"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000059"
      },
      "number_contig": {
        "is_a": "sequencing field",
        "title": "number of contigs",
        "description": "Total number of contigs in the cleaned/submitted assembly that makes up a given genome, SAG, MAG, or UViG",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "40"
          }
        ],
        "comments": [
          "Expected value: value"
        ],
        "slot_uri": "MIXS:0000060"
      },
      "feat_pred": {
        "is_a": "sequencing field",
        "title": "feature prediction",
        "description": "Method used to predict UViGs features such as ORFs, integration site, etc.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Prodigal;2.6.3;default parameters"
          }
        ],
        "comments": [
          "Expected value: names and versions of software(s), parameters used"
        ],
        "pattern": "{software};{version};{parameters}",
        "slot_uri": "MIXS:0000061"
      },
      "ref_db": {
        "is_a": "sequencing field",
        "title": "reference database(s)",
        "description": "List of database(s) used for ORF annotation, along with version number and reference to website or publication",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "pVOGs;5;http://dmk-brain.ecn.uiowa.edu/pVOGs/ Grazziotin et al. 2017 doi:10.1093/nar/gkw975"
          }
        ],
        "comments": [
          "Expected value: names, versions, and references of databases"
        ],
        "pattern": "{database};{version};{reference}",
        "slot_uri": "MIXS:0000062"
      },
      "sim_search_meth": {
        "is_a": "sequencing field",
        "title": "similarity search method",
        "description": "Tool used to compare ORFs with database, along with version and cutoffs used",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "HMMER3;3.1b2;hmmsearch, cutoff of 50 on score"
          }
        ],
        "comments": [
          "Expected value: names and versions of software(s), parameters used"
        ],
        "pattern": "{software};{version};{parameters}",
        "slot_uri": "MIXS:0000063"
      },
      "tax_class": {
        "is_a": "sequencing field",
        "title": "taxonomic classification",
        "description": "Method used for taxonomic classification, along with reference database used, classification rank, and thresholds used to classify new genomes",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "vConTACT vContact2 (references from NCBI RefSeq v83, genus rank classification, default parameters)"
          }
        ],
        "comments": [
          "Expected value: classification method, database name, and other parameters"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000064"
      },
      "x_16s_recover": {
        "is_a": "sequencing field",
        "title": "16S recovered",
        "description": "Can a 16S gene be recovered from the submitted SAG or MAG?",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes"
          }
        ],
        "comments": [
          "Expected value: boolean"
        ],
        "pattern": "{boolean}",
        "slot_uri": "MIXS:0000065"
      },
      "x_16s_recover_software": {
        "is_a": "sequencing field",
        "title": "16S recovery software",
        "description": "Tools used for 16S rRNA gene extraction",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "rambl;v2;default parameters"
          }
        ],
        "comments": [
          "Expected value: names and versions of software(s), parameters used"
        ],
        "pattern": "{software};{version};{parameters}",
        "slot_uri": "MIXS:0000066"
      },
      "trnas": {
        "is_a": "sequencing field",
        "title": "number of standard tRNAs extracted",
        "description": "The total number of tRNAs identified from the SAG or MAG",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "18"
          }
        ],
        "comments": [
          "Expected value: value from 0-21"
        ],
        "slot_uri": "MIXS:0000067"
      },
      "trna_ext_software": {
        "is_a": "sequencing field",
        "title": "tRNA extraction software",
        "description": "Tools used for tRNA identification",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "infernal;v2;default parameters"
          }
        ],
        "comments": [
          "Expected value: names and versions of software(s), parameters used"
        ],
        "pattern": "{software};{version};{parameters}",
        "slot_uri": "MIXS:0000068"
      },
      "compl_score": {
        "is_a": "sequencing field",
        "title": "completeness score",
        "description": "Completeness score is typically based on either the fraction of markers found as compared to a database or the percent of a genome found as compared to a closely related reference genome. High Quality Draft: >90%, Medium Quality Draft: >50%, and Low Quality Draft: < 50% should have the indicated completeness scores",
        "range": "compl_score_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "med;60%"
          }
        ],
        "comments": [
          "Expected value: quality;percent completeness"
        ],
        "pattern": "[high|med|low];{percentage}",
        "slot_uri": "MIXS:0000069"
      },
      "compl_software": {
        "is_a": "sequencing field",
        "title": "completeness software",
        "description": "Tools used for completion estimate, i.e. checkm, anvi'o, busco",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "checkm"
          }
        ],
        "comments": [
          "Expected value: names and versions of software(s) used"
        ],
        "pattern": "{software};{version}",
        "slot_uri": "MIXS:0000070"
      },
      "compl_appr": {
        "is_a": "sequencing field",
        "title": "completeness approach",
        "description": "The approach used to determine the completeness of a given genomic assembly, which would typically make use of a set of conserved marker genes or a closely related reference genome. For UViG completeness, include reference genome or group used, and contig feature suggesting a complete genome",
        "range": "compl_appr_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "other: UViG length compared to the average length of reference genomes from the P22virus genus (NCBI RefSeq v83)"
          }
        ],
        "comments": [
          "Expected value: text"
        ],
        "pattern": "[marker gene|reference based|other]",
        "slot_uri": "MIXS:0000071"
      },
      "contam_score": {
        "is_a": "sequencing field",
        "title": "contamination score",
        "description": "The contamination score is based on the fraction of single-copy genes that are observed more than once in a query genome. The following scores are acceptable for; High Quality Draft: < 5%, Medium Quality Draft: < 10%, Low Quality Draft: < 10%. Contamination must be below 5% for a SAG or MAG to be deposited into any of the public databases",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "1%"
          }
        ],
        "comments": [
          "Expected value: value"
        ],
        "pattern": "{float} percentage",
        "slot_uri": "MIXS:0000072"
      },
      "contam_screen_input": {
        "is_a": "sequencing field",
        "title": "contamination screening input",
        "description": "The type of sequence data used as input",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "contigs"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[reads| contigs]",
        "slot_uri": "MIXS:0000005"
      },
      "contam_screen_param": {
        "is_a": "sequencing field",
        "title": "contamination screening parameters",
        "description": "Specific parameters used in the decontamination sofware, such as reference database, coverage, and kmers. Combinations of these parameters may also be used, i.e. kmer and coverage, or reference database and kmer",
        "range": "contam_screen_param_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "kmer"
          }
        ],
        "comments": [
          "Expected value: enumeration;value or name"
        ],
        "pattern": "[ref db|kmer|coverage|combination];{text|integer}",
        "slot_uri": "MIXS:0000073"
      },
      "decontam_software": {
        "is_a": "sequencing field",
        "title": "decontamination software",
        "description": "Tool(s) used in contamination screening",
        "range": "decontam_software_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "anvi'o"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[checkm/refinem|anvi'o|prodege|bbtools:decontaminate.sh|acdc|combination]",
        "slot_uri": "MIXS:0000074"
      },
      "sort_tech": {
        "is_a": "sequencing field",
        "title": "sorting technology",
        "description": "Method used to sort/isolate cells or particles of interest",
        "range": "sort_tech_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "optical manipulation"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[flow cytometric cell sorting|microfluidics|lazer-tweezing|optical manipulation|micromanipulation|other]",
        "slot_uri": "MIXS:0000075"
      },
      "single_cell_lysis_appr": {
        "is_a": "sequencing field",
        "title": "single cell or viral particle lysis approach",
        "description": "Method used to free DNA from interior of the cell(s) or particle(s)",
        "range": "single_cell_lysis_appr_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "enzymatic"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[chemical|enzymatic|physical|combination]",
        "slot_uri": "MIXS:0000076"
      },
      "single_cell_lysis_prot": {
        "is_a": "sequencing field",
        "title": "single cell or viral particle lysis kit protocol",
        "description": "Name of the kit or standard protocol used for cell(s) or particle(s) lysis",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "ambion single cell lysis kit"
          }
        ],
        "comments": [
          "Expected value: kit, protocol name"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000054"
      },
      "wga_amp_appr": {
        "is_a": "sequencing field",
        "title": "WGA amplification approach",
        "description": "Method used to amplify genomic DNA in preparation for sequencing",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "mda based"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[pcr based|mda based]",
        "slot_uri": "MIXS:0000055"
      },
      "wga_amp_kit": {
        "is_a": "sequencing field",
        "title": "WGA amplification kit",
        "description": "Kit used to amplify genomic DNA in preparation for sequencing",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "qiagen repli-g"
          }
        ],
        "comments": [
          "Expected value: kit name"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000006"
      },
      "bin_param": {
        "is_a": "sequencing field",
        "title": "binning parameters",
        "description": "The parameters that have been applied during the extraction of genomes from metagenomic datasets",
        "range": "bin_param_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "coverage and kmer"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[homology search|kmer|coverage|codon usage|combination]",
        "slot_uri": "MIXS:0000077"
      },
      "bin_software": {
        "is_a": "sequencing field",
        "title": "binning software",
        "description": "Tool(s) used for the extraction of genomes from metagenomic datasets, where possible include a product ID (PID) of the tool(s) used.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "MetaCluster-TA (RRID:SCR_004599), MaxBin (biotools:maxbin)"
          }
        ],
        "comments": [
          "Expected value: names and versions of software(s) used"
        ],
        "pattern": "{software};{version}{PID}",
        "slot_uri": "MIXS:0000078"
      },
      "reassembly_bin": {
        "is_a": "sequencing field",
        "title": "reassembly post binning",
        "description": "Has an assembly been performed on a genome bin extracted from a metagenomic assembly?",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "no"
          }
        ],
        "comments": [
          "Expected value: boolean"
        ],
        "pattern": "{boolean}",
        "slot_uri": "MIXS:0000079"
      },
      "mag_cov_software": {
        "is_a": "sequencing field",
        "title": "MAG coverage software",
        "description": "Tool(s) used to determine the genome coverage if coverage is used as a binning parameter in the extraction of genomes from metagenomic datasets",
        "range": "mag_cov_software_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "bbmap"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[bwa|bbmap|bowtie|other]",
        "slot_uri": "MIXS:0000080"
      },
      "vir_ident_software": {
        "is_a": "sequencing field",
        "title": "viral identification software",
        "description": "Tool(s) used for the identification of UViG as a viral genome, software or protocol name including version number, parameters, and cutoffs used",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "VirSorter; 1.0.4; Virome database, category 2"
          }
        ],
        "comments": [
          "Expected value: software name, version and relevant parameters"
        ],
        "pattern": "{software};{version};{parameters}",
        "slot_uri": "MIXS:0000081"
      },
      "pred_genome_type": {
        "is_a": "sequencing field",
        "title": "predicted genome type",
        "description": "Type of genome predicted for the UViG",
        "range": "pred_genome_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "dsDNA"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[DNA|dsDNA|ssDNA|RNA|dsRNA|ssRNA|ssRNA (+)|ssRNA (-)|mixed|uncharacterized]",
        "slot_uri": "MIXS:0000082"
      },
      "pred_genome_struc": {
        "is_a": "sequencing field",
        "title": "predicted genome structure",
        "description": "Expected structure of the viral genome",
        "range": "pred_genome_struc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "non-segmented"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[segmented|non-segmented|undetermined]",
        "slot_uri": "MIXS:0000083"
      },
      "detec_type": {
        "is_a": "sequencing field",
        "title": "detection type",
        "description": "Type of UViG detection",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "independent sequence (UViG)"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[independent sequence (UViG)|provirus (UpViG)]",
        "slot_uri": "MIXS:0000084"
      },
      "otu_class_appr": {
        "is_a": "sequencing field",
        "title": "OTU classification approach",
        "description": "Cutoffs and approach used when clustering \u201cspecies-level\u201d OTUs. Note that results from standard 95% ANI / 85% AF clustering should be provided alongside OTUS defined from another set of thresholds, even if the latter are the ones primarily used during the analysis",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "95% ANI;85% AF; greedy incremental clustering"
          }
        ],
        "comments": [
          "Expected value: cutoffs and method used"
        ],
        "pattern": "{ANI cutoff};{AF cutoff};{clustering method}",
        "slot_uri": "MIXS:0000085"
      },
      "otu_seq_comp_appr": {
        "is_a": "sequencing field",
        "title": "OTU sequence comparison approach",
        "description": "Tool and thresholds used to compare sequences when computing \"species-level\" OTUs",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "blastn;2.6.0+;e-value cutoff: 0.001"
          }
        ],
        "comments": [
          "Expected value: software name, version and relevant parameters"
        ],
        "pattern": "{software};{version};{parameters}",
        "slot_uri": "MIXS:0000086"
      },
      "otu_db": {
        "is_a": "sequencing field",
        "title": "OTU database",
        "description": "Reference database (i.e. sequences not generated as part of the current study) used to cluster new genomes in \"species-level\" OTUs, if any",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "NCBI Viral RefSeq;83"
          }
        ],
        "comments": [
          "Expected value: database and version"
        ],
        "pattern": "{database};{version}",
        "slot_uri": "MIXS:0000087"
      },
      "host_pred_appr": {
        "is_a": "sequencing field",
        "title": "host prediction approach",
        "description": "Tool or approach used for host prediction",
        "range": "host_pred_appr_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "CRISPR spacer match"
          }
        ],
        "comments": [
          "Expected value: enumeration"
        ],
        "pattern": "[provirus|host sequence similarity|CRISPR spacer match|kmer similarity|co-occurrence|combination|other]",
        "slot_uri": "MIXS:0000088"
      },
      "host_pred_est_acc": {
        "is_a": "sequencing field",
        "title": "host prediction estimated accuracy",
        "description": "For each tool or approach used for host prediction, estimated false discovery rates should be included, either computed de novo or from the literature",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "CRISPR spacer match: 0 or 1 mismatches, estimated 8% FDR at the host genus rank (Edwards et al. 2016 doi:10.1093/femsre/fuv048)"
          }
        ],
        "comments": [
          "Expected value: false discovery rate"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000089"
      },
      "associated resource": {
        "is_a": "sequencing field",
        "title": "relevant electronic resources",
        "description": "A related resource that is referenced, cited, or otherwise associated to the sequence.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "http://www.earthmicrobiome.org/"
          }
        ],
        "comments": [
          "Expected value: reference to resource"
        ],
        "pattern": "{PMID} | {DOI} | {URL}",
        "slot_uri": "MIXS:0000091"
      },
      "sop": {
        "is_a": "sequencing field",
        "title": "relevant standard operating procedures",
        "description": "Standard operating procedures used in assembly and/or annotation of genomes, metagenomes or environmental sequences",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "http://press.igsb.anl.gov/earthmicrobiome/protocols-and-standards/its/"
          }
        ],
        "comments": [
          "Expected value: reference to SOP"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000090"
      },
      "barometric_press": {
        "is_a": "core field",
        "title": "barometric pressure",
        "description": "Force per unit area exerted against a surface by the weight of air above that surface",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5 millibar"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millibar",
          "Occurrence: 1",
          "This field is used uniquely in: air"
        ],
        "slot_uri": "MIXS:0000096"
      },
      "carb_dioxide": {
        "is_a": "core field",
        "title": "carbon dioxide",
        "description": "Carbon dioxide (gas) amount or concentration at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "410 parts per million"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 2 packages: air, built environment"
        ],
        "slot_uri": "MIXS:0000097"
      },
      "carb_monoxide": {
        "is_a": "core field",
        "title": "carbon monoxide",
        "description": "Carbon monoxide (gas) amount or concentration at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.1 parts per million"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, parts per million",
          "Occurrence: 1",
          "This field is used uniquely in: air"
        ],
        "slot_uri": "MIXS:0000098"
      },
      "chem_administration": {
        "is_a": "core field",
        "title": "chemical administration",
        "description": "List of chemical compounds administered to the host or site where sampling occurred, and when (e.g. Antibiotics, n fertilizer, air filter); can include multiple compounds. For chemical entities of biological interest ontology (chebi) (v 163), http://purl.bioontology.org/ontology/chebi",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "agar [CHEBI:2509];2018-05-11T20:00Z"
          }
        ],
        "comments": [
          "Expected value: CHEBI;timestamp",
          "Occurrence: m",
          "This field is used in: 13 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "pattern": "{termLabel} {[termID]};{timestamp}",
        "slot_uri": "MIXS:0000751"
      },
      "humidity": {
        "is_a": "core field",
        "title": "humidity",
        "description": "Amount of water vapour in the air, at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "25 gram per cubic meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: gram per cubic meter",
          "Occurrence: 1",
          "This field is used uniquely in: air"
        ],
        "slot_uri": "MIXS:0000100"
      },
      "methane": {
        "is_a": "core field",
        "title": "methane",
        "description": "Methane (gas) amount or concentration at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1800 parts per billion"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, parts per billion, parts per million",
          "Occurrence: 1",
          "This field is used in: 3 packages: air, microbial mat_biofilm, sediment"
        ],
        "slot_uri": "MIXS:0000101"
      },
      "organism_count": {
        "is_a": "core field",
        "title": "organism count",
        "description": "Total cell count of any organism (or group of organisms) per gram, volume or area of sample, should include name of organism followed by count. The method that was used for the enumeration (e.g. qPCR, atp, mpn, etc.) Should also be provided. (example: total prokaryotes; 3.5e7 cells per ml; qpcr)",
        "range": "organism_count_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "total prokaryotes;3.5e7 cells per milliliter;qPCR"
          }
        ],
        "comments": [
          "Expected value: organism name;measurement value;enumeration",
          "Preferred unit: number of cells per cubic meter, number of cells per milliliter, number of cells per cubic centimeter",
          "Occurrence: m",
          "This field is used in: 16 packages: air, built environment, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "pattern": "{text};{float} {unit};[qPCR|ATP|MPN|other]",
        "slot_uri": "MIXS:0000103"
      },
      "oxygen": {
        "is_a": "core field",
        "title": "oxygen",
        "description": "Oxygen (gas) amount or concentration at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "600 parts per million"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used uniquely in: air"
        ],
        "slot_uri": "MIXS:0000104"
      },
      "oxy_stat_samp": {
        "is_a": "core field",
        "title": "oxygenation status of sample",
        "description": "Oxygenation status of sample",
        "range": "oxy_stat_samp_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "aerobic"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 15 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "pattern": "[aerobic|anaerobic|other]",
        "slot_uri": "MIXS:0000753"
      },
      "perturbation": {
        "is_a": "core field",
        "title": "perturbation",
        "description": "Type of perturbation, e.g. chemical administration, physical disturbance, etc., coupled with perturbation regimen including how many times the perturbation was repeated, how long each perturbation lasted, and the start and end time of the entire perturbation period; can include multiple perturbation types",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "antibiotic addition;R2/2018-05-11T14:30Z/2018-05-11T19:30Z/P1H30M"
          }
        ],
        "comments": [
          "Expected value: perturbation type name;perturbation interval and duration",
          "Occurrence: m",
          "This field is used in: 13 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "pattern": "{text};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000754"
      },
      "pollutants": {
        "is_a": "core field",
        "title": "pollutants",
        "description": "Pollutant types and, amount or concentrations measured at the time of sampling; can report multiple pollutants by entering numeric values preceded by name of pollutant",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "lead;0.15 microgram per cubic meter"
          }
        ],
        "comments": [
          "Expected value: pollutant name;measurement value",
          "Preferred unit: gram, mole per liter, milligram per liter, microgram per cubic meter",
          "Occurrence: m",
          "This field is used uniquely in: air"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000107"
      },
      "air particulate matter concentration": {
        "is_a": "core field",
        "title": "air_PM_concen",
        "description": "Concentration of substances that remain suspended in the air, and comprise mixtures of organic and inorganic substances (PM10 and PM2.5); can report multiple PM's by entering numeric values preceded by name of PM",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "PM2.5;10 microgram per cubic meter"
          }
        ],
        "comments": [
          "Expected value: particulate matter name;measurement value",
          "Preferred unit: microgram per cubic meter",
          "Occurrence: m",
          "This field is used uniquely in: air"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000108"
      },
      "samp_salinity": {
        "is_a": "core field",
        "title": "sample salinity",
        "description": "Salinity is the total concentration of all dissolved salts in a liquid or solid (in the form of an extract obtained by centrifugation) sample. While salinity can be measured by a complete chemical analysis, this method is difficult and time consuming. More often, it is instead derived from the conductivity measurement. This is known as practical salinity. These derivations compare the specific conductance of the sample to a salinity standard such as seawater",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, practical salinity unit, percentage",
          "Occurrence: 1",
          "This field is used in: 11 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, plant-associated, wastewater_sludge"
        ],
        "slot_uri": "MIXS:0000109"
      },
      "salinity": {
        "is_a": "core field",
        "title": "salinity",
        "description": "The total concentration of all dissolved salts in a liquid or solid sample. While salinity can be measured by a complete chemical analysis, this method is difficult and time consuming. More often, it is instead derived from the conductivity measurement. This is known as practical salinity. These derivations compare the specific conductance of the sample to a salinity standard such as seawater.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "25 practical salinity unit"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: practical salinity unit, percentage",
          "Occurrence: 1",
          "This field is used in: 15 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000183"
      },
      "samp_store_dur": {
        "is_a": "core field",
        "title": "sample storage duration",
        "description": "Duration for which the sample was stored",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "P1Y6M"
          }
        ],
        "comments": [
          "Expected value: duration",
          "Occurrence: 1",
          "This field is used in: 15 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "pattern": "{duration}",
        "slot_uri": "MIXS:0000116"
      },
      "samp_store_loc": {
        "is_a": "core field",
        "title": "sample storage location",
        "description": "Location at which sample was stored, usually name of a specific freezer/room",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Freezer no:5"
          }
        ],
        "comments": [
          "Expected value: location name",
          "Occurrence: 1",
          "This field is used in: 15 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000755"
      },
      "samp_store_temp": {
        "is_a": "core field",
        "title": "sample storage temperature",
        "description": "Temperature at which sample was stored, e.g. -80 degree Celsius",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "-80 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used in: 15 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000110"
      },
      "solar_irradiance": {
        "is_a": "core field",
        "title": "solar irradiance",
        "description": "The amount of solar energy that arrives at a specific area of a surface during a specific time interval",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1.36 kilowatts per square meter per day"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: kilowatts per square meter per day, ergs per square centimeter per second",
          "Occurrence: 1",
          "This field is used uniquely in: air"
        ],
        "slot_uri": "MIXS:0000112"
      },
      "ventilation_rate": {
        "is_a": "core field",
        "title": "ventilation rate",
        "description": "Ventilation rate of the system in the sampled premises",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "750 cubic meter per minute"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: cubic meter per minute, liters per second",
          "Occurrence: 1",
          "This field is used uniquely in: air"
        ],
        "slot_uri": "MIXS:0000114"
      },
      "ventilation_type": {
        "is_a": "core field",
        "title": "ventilation type",
        "description": "Ventilation system used in the sampled premises",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Operable windows"
          }
        ],
        "comments": [
          "Expected value: ventilation type name",
          "Occurrence: 1",
          "This field is used in: 2 packages: air, built environment"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000756"
      },
      "volatile_org_comp": {
        "is_a": "core field",
        "title": "volatile organic compounds",
        "description": "Concentration of carbon-based chemicals that easily evaporate at room temperature; can report multiple volatile organic compounds by entering numeric values preceded by name of compound",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "formaldehyde;500 nanogram per liter"
          }
        ],
        "comments": [
          "Expected value: volatile organic compound name;measurement value",
          "Preferred unit: microgram per cubic meter, parts per million, nanogram per liter",
          "Occurrence: m",
          "This field is used uniquely in: air"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000115"
      },
      "wind_direction": {
        "is_a": "core field",
        "title": "wind direction",
        "description": "Wind direction is the direction from which a wind originates",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Northwest"
          }
        ],
        "comments": [
          "Expected value: wind direction name",
          "Occurrence: 1",
          "This field is used uniquely in: air"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000757"
      },
      "wind_speed": {
        "is_a": "core field",
        "title": "wind speed",
        "description": "Speed of wind measured at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "21 kilometer per hour"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter per second, kilometer per hour",
          "Occurrence: 1",
          "This field is used uniquely in: air"
        ],
        "slot_uri": "MIXS:0000118"
      },
      "misc_param": {
        "is_a": "core field",
        "title": "miscellaneous parameter",
        "description": "Any other measurement performed or parameter collected, that is not listed here",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "Bicarbonate ion concentration;2075 micromole per kilogram"
          }
        ],
        "comments": [
          "Expected value: parameter name;measurement value",
          "Occurrence: m",
          "This field is used in: 16 packages: air, host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, plant-associated, sediment, soil, wastewater_sludge, water"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000752"
      },
      "surf_material": {
        "is_a": "core field",
        "title": "surface material",
        "description": "Surface materials at the point of sampling",
        "range": "surf_material_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "wood"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[adobe|carpet|cinder blocks|concrete|hay bales|glass|metal|paint|plastic|stainless steel|stone|stucco|tile|vinyl|wood]",
        "slot_uri": "MIXS:0000758"
      },
      "surf_air_cont": {
        "is_a": "core field",
        "title": "surface-air contaminant",
        "description": "Contaminant identified on surface",
        "range": "surf_air_cont_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "radon"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: m",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[dust|organic matter|particulate matter|volatile organic compounds|biological contaminants|radon|nutrients|biocides]",
        "slot_uri": "MIXS:0000759"
      },
      "rel_air_humidity": {
        "is_a": "core field",
        "title": "relative air humidity",
        "description": "Partial vapor and air pressure, density of the vapor and air, or by the actual mass of the vapor and air",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "80%"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: percentage",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000121"
      },
      "abs_air_humidity": {
        "is_a": "core field",
        "title": "absolute air humidity",
        "description": "Actual mass of water vapor - mh20 - present in the air water vapor mixture",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "9 gram per gram"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: gram per gram, kilogram per kilogram, kilogram, pound",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000122"
      },
      "surf_humidity": {
        "is_a": "core field",
        "title": "surface humidity",
        "description": "Surfaces: water activity as a function of air and material moisture",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "10%"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: percentage",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000123"
      },
      "air_temp": {
        "is_a": "core field",
        "title": "air temperature",
        "description": "Temperature of the air at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "20 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000124"
      },
      "surf_temp": {
        "is_a": "core field",
        "title": "surface temperature",
        "description": "Temperature of the surface at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "15 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000125"
      },
      "surf_moisture_ph": {
        "is_a": "core field",
        "title": "surface moisture pH",
        "description": "ph measurement of surface",
        "range": "double",
        "multivalued": false,
        "examples": [
          {
            "value": "7"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000760"
      },
      "build_occup_type": {
        "is_a": "core field",
        "title": "building occupancy type",
        "description": "The primary function for which a building or discrete part of a building is intended to be used",
        "range": "build_occup_type_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "market"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: m",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[office|market|restaurant|residence|school|residential|commercial|low rise|high rise|wood framed|office|health care|school|airport|sports complex]",
        "slot_uri": "MIXS:0000761"
      },
      "surf_moisture": {
        "is_a": "core field",
        "title": "surface moisture",
        "description": "Water held on a surface",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.01 gram per square meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: parts per million, gram per cubic meter, gram per square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000128"
      },
      "dew_point": {
        "is_a": "core field",
        "title": "dew point",
        "description": "The temperature to which a given parcel of humid air must be cooled, at constant barometric pressure, for water vapor to condense into water.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "22 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000129"
      },
      "indoor_space": {
        "is_a": "core field",
        "title": "indoor space",
        "description": "A distinguishable space within a structure, the purpose for which discrete areas of a building is used",
        "range": "indoor_space_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "foyer"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[bedroom|office|bathroom|foyer|kitchen|locker room|hallway|elevator]",
        "slot_uri": "MIXS:0000763"
      },
      "indoor_surf": {
        "is_a": "core field",
        "title": "indoor surface",
        "description": "Type of indoor surface",
        "range": "indoor_surf_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "wall"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[cabinet|ceiling|counter top|door|shelving|vent cover|window|wall]",
        "slot_uri": "MIXS:0000764"
      },
      "filter_type": {
        "is_a": "core field",
        "title": "filter type",
        "description": "A device which removes solid particulates or airborne molecular contaminants",
        "range": "filter_type_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "HEPA"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: m",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[particulate air filter|chemical air filter|low-MERV pleated media|HEPA|electrostatic|gas-phase or ultraviolet air treatments]",
        "slot_uri": "MIXS:0000765"
      },
      "heat_cool_type": {
        "is_a": "core field",
        "title": "heating and cooling system type",
        "description": "Methods of conditioning or heating a room or building",
        "range": "heat_cool_type_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "heat pump"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: m",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[radiant system|heat pump|forced air system|steam forced heat|wood stove]",
        "slot_uri": "MIXS:0000766"
      },
      "substructure_type": {
        "is_a": "core field",
        "title": "substructure type",
        "description": "The substructure or under building is that largely hidden section of the building which is built off the foundations to the ground floor level",
        "range": "substructure_type_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "basement"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: m",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[crawlspace|slab on grade|basement]",
        "slot_uri": "MIXS:0000767"
      },
      "building_setting": {
        "is_a": "core field",
        "title": "building setting",
        "description": "A location (geography) where a building is set",
        "range": "building_setting_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "rural"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[urban|suburban|exurban|rural]",
        "slot_uri": "MIXS:0000768"
      },
      "light_type": {
        "is_a": "core field",
        "title": "light type",
        "description": "Application of light to achieve some practical or aesthetic effect. Lighting includes the use of both artificial light sources such as lamps and light fixtures, as well as natural illumination by capturing daylight. Can also include absence of light",
        "range": "light_type_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "desk lamp"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: m",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[natural light|electric light|desk lamp|flourescent lights|natural light|none]",
        "slot_uri": "MIXS:0000769"
      },
      "samp_sort_meth": {
        "is_a": "core field",
        "title": "sample size sorting method",
        "description": "Method by which samples are sorted; open face filter collecting total suspended particles, prefilter to remove particles larger than X micrometers in diameter, where common values of X would be 10 and 2.5 full size sorting in a cascade impactor.",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: description of method",
          "Occurrence: m",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000216"
      },
      "space_typ_state": {
        "is_a": "core field",
        "title": "space typical state",
        "description": "Customary or normal state of the space",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "typically occupied"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[typically occupied|typically unoccupied]",
        "slot_uri": "MIXS:0000770"
      },
      "typ_occup_density": {
        "is_a": "core field",
        "title": "typical occupant density",
        "description": "Customary or normal density of occupants",
        "range": "double",
        "multivalued": false,
        "examples": [
          {
            "value": "25"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000771"
      },
      "occup_samp": {
        "is_a": "core field",
        "title": "occupancy at sampling",
        "description": "Number of occupants present at time of sample within the given space",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "10"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000772"
      },
      "occup_density_samp": {
        "is_a": "core field",
        "title": "occupant density at sampling",
        "description": "Average number of occupants at time of sampling per square footage",
        "range": "double",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000217"
      },
      "address": {
        "is_a": "core field",
        "title": "address",
        "description": "The street name and building number where the sampling occurred.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{integer}{text}",
        "slot_uri": "MIXS:0000218"
      },
      "adj_room": {
        "is_a": "core field",
        "title": "adjacent rooms",
        "description": "List of rooms (room number, room name) immediately adjacent to the sampling room",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: room name;room number",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{text};{integer}",
        "slot_uri": "MIXS:0000219"
      },
      "aero_struc": {
        "is_a": "core field",
        "title": "aerospace structure",
        "description": "Aerospace structures typically consist of thin plates with stiffeners for the external surfaces, bulkheads and frames to support the shape and fasteners such as welds, rivets, screws and bolts to hold the components together",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "plane"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[plane|glider]",
        "slot_uri": "MIXS:0000773"
      },
      "amount_light": {
        "is_a": "core field",
        "title": "amount of light",
        "description": "The unit of illuminance and luminous emittance, measuring luminous flux per unit area",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: lux, lumens per square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000140"
      },
      "arch_struc": {
        "is_a": "core field",
        "title": "architectural structure",
        "description": "An architectural structure is a human-made, free-standing, immobile outdoor construction",
        "range": "arch_struc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "shed"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[building|shed|home]",
        "slot_uri": "MIXS:0000774"
      },
      "avg_occup": {
        "is_a": "core field",
        "title": "average daily occupancy",
        "description": "Daily average occupancy of room. Indicate the number of person(s) daily occupying the sampling room.",
        "range": "double",
        "multivalued": false,
        "examples": [
          {
            "value": "2"
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000775"
      },
      "avg_dew_point": {
        "is_a": "core field",
        "title": "average dew point",
        "description": "The average of dew point measures taken at the beginning of every hour over a 24 hour period on the sampling day",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "25.5 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000141"
      },
      "avg_temp": {
        "is_a": "core field",
        "title": "average temperature",
        "description": "The average of temperatures taken at the beginning of every hour over a 24 hour period on the sampling day",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "12.5 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000142"
      },
      "bathroom_count": {
        "is_a": "core field",
        "title": "bathroom count",
        "description": "The number of bathrooms in the building",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "1"
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000776"
      },
      "bedroom_count": {
        "is_a": "core field",
        "title": "bedroom count",
        "description": "The number of bedrooms in the building",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "2"
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000777"
      },
      "built_struc_age": {
        "is_a": "core field",
        "title": "built structure age",
        "description": "The age of the built structure since construction",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "15"
          }
        ],
        "comments": [
          "Expected value: value",
          "Preferred unit: year",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000145"
      },
      "built_struc_set": {
        "is_a": "core field",
        "title": "built structure setting",
        "description": "The characterization of the location of the built structure as high or low human density",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "rural"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[urban|rural]",
        "slot_uri": "MIXS:0000778"
      },
      "built_struc_type": {
        "is_a": "core field",
        "title": "built structure type",
        "description": "A physical structure that is a body or assemblage of bodies in space to form a system capable of supporting loads",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: free text",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000721"
      },
      "ceil_area": {
        "is_a": "core field",
        "title": "ceiling area",
        "description": "The area of the ceiling space within the room",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "25 square meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000148"
      },
      "ceil_cond": {
        "is_a": "core field",
        "title": "ceiling condition",
        "description": "The physical condition of the ceiling at the time of sampling; photos or video preferred; use drawings to indicate location of damaged areas",
        "range": "ceil_cond_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "damaged"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[new|visible wear|needs repair|damaged|rupture]",
        "slot_uri": "MIXS:0000779"
      },
      "ceil_finish_mat": {
        "is_a": "core field",
        "title": "ceiling finish material",
        "description": "The type of material used to finish a ceiling",
        "range": "ceil_finish_mat_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "stucco"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[drywall|mineral fibre|tiles|PVC|plasterboard|metal|fiberglass|stucco|mineral wool/calcium silicate|wood]",
        "slot_uri": "MIXS:0000780"
      },
      "ceil_water_mold": {
        "is_a": "core field",
        "title": "ceiling signs of water/mold",
        "description": "Signs of the presence of mold or mildew on the ceiling",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "presence of mold visible"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[presence of mold visible|no presence of mold visible]",
        "slot_uri": "MIXS:0000781"
      },
      "ceil_struc": {
        "is_a": "core field",
        "title": "ceiling structure",
        "description": "The construction format of the ceiling",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "concrete"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[wood frame|concrete]",
        "slot_uri": "MIXS:0000782"
      },
      "ceil_texture": {
        "is_a": "core field",
        "title": "ceiling texture",
        "description": "The feel, appearance, or consistency of a ceiling surface",
        "range": "ceil_texture_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "popcorn"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[crows feet|crows-foot stomp|double skip|hawk and trowel|knockdown|popcorn|orange peel|rosebud stomp|Santa-Fe texture|skip trowel|smooth|stomp knockdown|swirl]",
        "slot_uri": "MIXS:0000783"
      },
      "ceil_thermal_mass": {
        "is_a": "core field",
        "title": "ceiling thermal mass",
        "description": "The ability of the ceiling to provide inertia against temperature fluctuations. Generally this means concrete that is exposed. A metal deck that supports a concrete slab will act thermally as long as it is exposed to room air flow",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: joule per degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000143"
      },
      "ceil_type": {
        "is_a": "core field",
        "title": "ceiling type",
        "description": "The type of ceiling according to the ceiling's appearance or construction",
        "range": "ceil_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "coffered"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[cathedral|dropped|concave|barrel-shaped|coffered|cove|stretched]",
        "slot_uri": "MIXS:0000784"
      },
      "cool_syst_id": {
        "is_a": "core field",
        "title": "cooling system identifier",
        "description": "The cooling system identifier",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "12345"
          }
        ],
        "comments": [
          "Expected value: unique identifier",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000785"
      },
      "date_last_rain": {
        "is_a": "core field",
        "title": "date last rain",
        "description": "The date of the last time it rained",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11:T14:30Z"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000786"
      },
      "build_docs": {
        "is_a": "core field",
        "title": "design, construction, and operation documents",
        "description": "The building design, construction and operation documents",
        "range": "build_docs_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "maintenance plans"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[building information model|commissioning report|complaint logs|contract administration|cost estimate|janitorial schedules or logs|maintenance plans|schedule|sections|shop drawings|submittals|ventilation system|windows]",
        "slot_uri": "MIXS:0000787"
      },
      "door_size": {
        "is_a": "core field",
        "title": "door area or size",
        "description": "The size of the door",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "2.5 square meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000158"
      },
      "door_cond": {
        "is_a": "core field",
        "title": "door condition",
        "description": "The phsical condition of the door",
        "range": "door_cond_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "new"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[damaged|needs repair|new|rupture|visible wear]",
        "slot_uri": "MIXS:0000788"
      },
      "door_direct": {
        "is_a": "core field",
        "title": "door direction of opening",
        "description": "The direction the door opens",
        "range": "door_direct_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "inward"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[inward|outward|sideways]",
        "slot_uri": "MIXS:0000789"
      },
      "door_loc": {
        "is_a": "core field",
        "title": "door location",
        "description": "The relative location of the door in the room",
        "range": "door_loc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "north"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[north|south|east|west]",
        "slot_uri": "MIXS:0000790"
      },
      "door_mat": {
        "is_a": "core field",
        "title": "door material",
        "description": "The material the door is composed of",
        "range": "door_mat_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "wood"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[aluminum|cellular PVC|engineered plastic|fiberboard|fiberglass|metal|thermoplastic alloy|vinyl|wood|wood/plastic composite]",
        "slot_uri": "MIXS:0000791"
      },
      "door_move": {
        "is_a": "core field",
        "title": "door movement",
        "description": "The type of movement of the door",
        "range": "door_move_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "swinging"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[collapsible|folding|revolving|rolling shutter|sliding|swinging]",
        "slot_uri": "MIXS:0000792"
      },
      "door_water_mold": {
        "is_a": "core field",
        "title": "door signs of water/mold",
        "description": "Signs of the presence of mold or mildew on a door",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "presence of mold visible"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[presence of mold visible|no presence of mold visible]",
        "slot_uri": "MIXS:0000793"
      },
      "door_type": {
        "is_a": "core field",
        "title": "door type",
        "description": "The type of door material",
        "range": "door_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "wooden"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[composite|metal|wooden]",
        "slot_uri": "MIXS:0000794"
      },
      "door_comp_type": {
        "is_a": "core field",
        "title": "door type, composite",
        "description": "The composite type of the door",
        "range": "door_comp_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "revolving"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[metal covered|revolving|sliding|telescopic]",
        "slot_uri": "MIXS:0000795"
      },
      "door_type_metal": {
        "is_a": "core field",
        "title": "door type, metal",
        "description": "The type of metal door",
        "range": "door_type_metal_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "hollow"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[collapsible|corrugated steel|hollow|rolling shutters|steel plate]",
        "slot_uri": "MIXS:0000796"
      },
      "door_type_wood": {
        "is_a": "core field",
        "title": "door type, wood",
        "description": "The type of wood door",
        "range": "door_type_wood_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "battened"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[bettened and ledged|battened|ledged and braced|battened|ledged and framed|battened|ledged, braced and frame|framed and paneled|glashed or sash|flush|louvered|wire gauged]",
        "slot_uri": "MIXS:0000797"
      },
      "drawings": {
        "is_a": "core field",
        "title": "drawings",
        "description": "The buildings architectural drawings; if design is chosen, indicate phase-conceptual, schematic, design development, and construction documents",
        "range": "drawings_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "sketch"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[operation|as built|construction|bid|design|building navigation map|diagram|sketch]",
        "slot_uri": "MIXS:0000798"
      },
      "elevator": {
        "is_a": "core field",
        "title": "elevator count",
        "description": "The number of elevators within the built structure",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "2"
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000799"
      },
      "escalator": {
        "is_a": "core field",
        "title": "escalator count",
        "description": "The number of escalators within the built structure",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "4"
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000800"
      },
      "exp_duct": {
        "is_a": "core field",
        "title": "exposed ductwork",
        "description": "The amount of exposed ductwork in the room",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000144"
      },
      "exp_pipe": {
        "is_a": "core field",
        "title": "exposed pipes",
        "description": "The number of exposed pipes in the room",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000220"
      },
      "ext_door": {
        "is_a": "core field",
        "title": "exterior door count",
        "description": "The number of exterior doors in the built structure",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000170"
      },
      "fireplace_type": {
        "is_a": "core field",
        "title": "fireplace type",
        "description": "A firebox with chimney",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "wood burning"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[gas burning|wood burning]",
        "slot_uri": "MIXS:0000802"
      },
      "floor_age": {
        "is_a": "core field",
        "title": "floor age",
        "description": "The time period since installment of the carpet or flooring",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Preferred unit: years, weeks, days",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000164"
      },
      "floor_area": {
        "is_a": "core field",
        "title": "floor area",
        "description": "The area of the floor space within the room",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000165"
      },
      "floor_cond": {
        "is_a": "core field",
        "title": "floor condition",
        "description": "The physical condition of the floor at the time of sampling; photos or video preferred; use drawings to indicate location of damaged areas",
        "range": "floor_cond_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "new"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[new|visible wear|needs repair|damaged|rupture]",
        "slot_uri": "MIXS:0000803"
      },
      "floor_count": {
        "is_a": "core field",
        "title": "floor count",
        "description": "The number of floors in the building, including basements and mechanical penthouse",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000225"
      },
      "floor_finish_mat": {
        "is_a": "core field",
        "title": "floor finish material",
        "description": "The floor covering type; the finished surface that is walked on",
        "range": "floor_finish_mat_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "carpet"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[tile|wood strip or parquet|carpet|rug|laminate wood|lineoleum|vinyl composition tile|sheet vinyl|stone|bamboo|cork|terrazo|concrete|none;specify unfinished|sealed|clear finish|paint]",
        "slot_uri": "MIXS:0000804"
      },
      "floor_water_mold": {
        "is_a": "core field",
        "title": "floor signs of water/mold",
        "description": "Signs of the presence of mold or mildew in a room",
        "range": "floor_water_mold_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "ceiling discoloration"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[mold odor|wet floor|water stains|wall discoloration|floor discoloration|ceiling discoloration|peeling paint or wallpaper|bulging walls|condensation]",
        "slot_uri": "MIXS:0000805"
      },
      "floor_struc": {
        "is_a": "core field",
        "title": "floor structure",
        "description": "Refers to the structural elements and subfloor upon which the finish flooring is installed",
        "range": "floor_struc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "concrete"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[balcony|floating floor|glass floor|raised floor|sprung floor|wood-framed|concrete]",
        "slot_uri": "MIXS:0000806"
      },
      "floor_thermal_mass": {
        "is_a": "core field",
        "title": "floor thermal mass",
        "description": "The ability of the floor to provide inertia against temperature fluctuations",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: joule per degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000166"
      },
      "freq_clean": {
        "is_a": "core field",
        "title": "frequency of cleaning",
        "description": "The number of times the sample location is cleaned. Frequency of cleaning might be on a Daily basis, Weekly, Monthly, Quarterly or Annually.",
        "range": "freq_clean_enum",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: enumeration or {text}",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[ Daily| Weekly| Monthly| Quarterly | Annually| other]",
        "slot_uri": "MIXS:0000226"
      },
      "freq_cook": {
        "is_a": "core field",
        "title": "frequency of cooking",
        "description": "The number of times a meal is cooked per week",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000227"
      },
      "furniture": {
        "is_a": "core field",
        "title": "furniture",
        "description": "The types of furniture present in the sampled room",
        "range": "furniture_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "chair"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[cabinet|chair|desks]",
        "slot_uri": "MIXS:0000807"
      },
      "gender_restroom": {
        "is_a": "core field",
        "title": "gender of restroom",
        "description": "The gender type of the restroom",
        "range": "gender_restroom_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "male"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[all gender|female|gender neurtral|male|male and female|unisex]",
        "slot_uri": "MIXS:0000808"
      },
      "hall_count": {
        "is_a": "core field",
        "title": "hallway/corridor count",
        "description": "The total count of hallways and cooridors in the built structure",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000228"
      },
      "handidness": {
        "is_a": "core field",
        "title": "handidness",
        "description": "The handidness of the individual sampled",
        "range": "handidness_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "right handedness"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[ambidexterity|left handedness|mixed-handedness|right handedness]",
        "slot_uri": "MIXS:0000809"
      },
      "heat_deliv_loc": {
        "is_a": "core field",
        "title": "heating delivery locations",
        "description": "The location of heat delivery within the room",
        "range": "heat_deliv_loc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "north"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[north|south|east|west]",
        "slot_uri": "MIXS:0000810"
      },
      "heat_sys_deliv_meth": {
        "is_a": "core field",
        "title": "heating system delivery method",
        "description": "The method by which the heat is delivered through the system",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "radiant"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[conductive|radiant]",
        "slot_uri": "MIXS:0000812"
      },
      "heat_system_id": {
        "is_a": "core field",
        "title": "heating system identifier",
        "description": "The heating system identifier",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: unique identifier",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000833"
      },
      "height_carper_fiber": {
        "is_a": "core field",
        "title": "height carpet fiber mat",
        "description": "The average carpet fiber height in the indoor environment",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Preferred unit: centimeter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000167"
      },
      "inside_lux": {
        "is_a": "core field",
        "title": "inside lux light",
        "description": "The recorded value at sampling time (power density)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: kilowatt per square metre",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000168"
      },
      "int_wall_cond": {
        "is_a": "core field",
        "title": "interior wall condition",
        "description": "The physical condition of the wall at the time of sampling; photos or video preferred; use drawings to indicate location of damaged areas",
        "range": "int_wall_cond_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "damaged"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[new|visible wear|needs repair|damaged|rupture]",
        "slot_uri": "MIXS:0000813"
      },
      "last_clean": {
        "is_a": "core field",
        "title": "last time swept/mopped/vacuumed",
        "description": "The last time the floor was cleaned (swept, mopped, vacuumed)",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11:T14:30Z"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000814"
      },
      "max_occup": {
        "is_a": "core field",
        "title": "maximum occupancy",
        "description": "The maximum amount of people allowed in the indoor environment",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000229"
      },
      "mech_struc": {
        "is_a": "core field",
        "title": "mechanical structure",
        "description": "mechanical structure: a moving structure",
        "range": "mech_struc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "elevator"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[subway|coach|carriage|elevator|escalator|boat|train|car|bus]",
        "slot_uri": "MIXS:0000815"
      },
      "number_plants": {
        "is_a": "core field",
        "title": "number of houseplants",
        "description": "The number of plant(s) in the sampling space",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000230"
      },
      "number_pets": {
        "is_a": "core field",
        "title": "number of pets",
        "description": "The number of pets residing in the sampled space",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000231"
      },
      "number_resident": {
        "is_a": "core field",
        "title": "number of residents",
        "description": "The number of individuals currently occupying in the sampling location",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000232"
      },
      "occup_document": {
        "is_a": "core field",
        "title": "occupancy documentation",
        "description": "The type of documentation of occupancy",
        "range": "occup_document_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "estimate"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[automated count|estimate|manual count|videos]",
        "slot_uri": "MIXS:0000816"
      },
      "ext_wall_orient": {
        "is_a": "core field",
        "title": "orientations of exterior wall",
        "description": "The orientation of the exterior wall",
        "range": "ext_wall_orient_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "northwest"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[north|south|east|west|northeast|southeast|southwest|northwest]",
        "slot_uri": "MIXS:0000817"
      },
      "ext_window_orient": {
        "is_a": "core field",
        "title": "orientations of exterior window",
        "description": "The compass direction the exterior window of the room is facing",
        "range": "ext_window_orient_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "southwest"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[north|south|east|west|northeast|southeast|southwest|northwest]",
        "slot_uri": "MIXS:0000818"
      },
      "rel_humidity_out": {
        "is_a": "core field",
        "title": "outside relative humidity",
        "description": "The recorded outside relative humidity value at the time of sampling",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "12 per kilogram of air"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: gram of air, kilogram of air",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000188"
      },
      "pres_animal_insect": {
        "is_a": "core field",
        "title": "presence of pets, animals, or insects",
        "description": "The type and number of animals or insects present in the sampling space.",
        "range": "pres_animal_insect_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "cat;5"
          }
        ],
        "comments": [
          "Expected value: enumeration;count",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[cat|dog|rodent|snake|other];{integer}",
        "slot_uri": "MIXS:0000819"
      },
      "quad_pos": {
        "is_a": "core field",
        "title": "quadrant position",
        "description": "The quadrant position of the sampling room within the building",
        "range": "quad_pos_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "West side"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[North side|West side|South side|East side]",
        "slot_uri": "MIXS:0000820"
      },
      "rel_samp_loc": {
        "is_a": "core field",
        "title": "relative sampling location",
        "description": "The sampling location within the train car",
        "range": "rel_samp_loc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "center of car"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[edge of car|center of car|under a seat]",
        "slot_uri": "MIXS:0000821"
      },
      "room_air_exch_rate": {
        "is_a": "core field",
        "title": "room air exchange rate",
        "description": "The rate at which outside air replaces indoor air in a given space",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: liter per hour",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000169"
      },
      "room_architec_elem": {
        "is_a": "core field",
        "title": "room architectural elements",
        "description": "The unique details and component parts that, together, form the architecture of a distinguisahable space within a built structure",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: free text",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000233"
      },
      "room_condt": {
        "is_a": "core field",
        "title": "room condition",
        "description": "The condition of the room at the time of sampling",
        "range": "room_condt_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "new"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[new|visible wear|needs repair|damaged|rupture|visible signs of mold/mildew]",
        "slot_uri": "MIXS:0000822"
      },
      "room_count": {
        "is_a": "core field",
        "title": "room count",
        "description": "The total count of rooms in the built structure including all room types",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000234"
      },
      "room_dim": {
        "is_a": "core field",
        "title": "room dimensions",
        "description": "The length, width and height of sampling room",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{integer} {unit} x {integer} {unit} x {integer} {unit}",
        "slot_uri": "MIXS:0000192"
      },
      "room_door_dist": {
        "is_a": "core field",
        "title": "room door distance",
        "description": "Distance between doors (meters) in the hallway between the sampling room and adjacent rooms",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{integer} {unit}",
        "slot_uri": "MIXS:0000193"
      },
      "room_loc": {
        "is_a": "core field",
        "title": "room location in building",
        "description": "The position of the room within the building",
        "range": "room_loc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "interior room"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[corner room|interior room|exterior wall]",
        "slot_uri": "MIXS:0000823"
      },
      "room_moist_dam_hist": {
        "is_a": "core field",
        "title": "room moisture damage or mold history",
        "description": "The history of moisture damage or mold in the past 12 months. Number of events of moisture damage or mold observed",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000235"
      },
      "room_net_area": {
        "is_a": "core field",
        "title": "room net area",
        "description": "The net floor area of sampling room. Net area excludes wall thicknesses",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: square feet, square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{integer} {unit}",
        "slot_uri": "MIXS:0000194"
      },
      "room_occup": {
        "is_a": "core field",
        "title": "room occupancy",
        "description": "Count of room occupancy at time of sampling",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000236"
      },
      "room_samp_pos": {
        "is_a": "core field",
        "title": "room sampling position",
        "description": "The horizontal sampling position in the room relative to architectural elements",
        "range": "room_samp_pos_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "south corner"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[north corner|south corner|west corner|east corner|northeast corner|northwest corner|southeast corner|southwest corner|center]",
        "slot_uri": "MIXS:0000824"
      },
      "room_type": {
        "is_a": "core field",
        "title": "room type",
        "description": "The main purpose or activity of the sampling room. A room is any distinguishable space within a structure",
        "range": "room_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "bathroom"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[attic|bathroom|closet|conference room|elevator|examining room|hallway|kitchen|mail room|private office|open office|stairwell|,restroom|lobby|vestibule|mechanical or electrical room|data center|laboratory_wet|laboratory_dry|gymnasium|natatorium|auditorium|lockers|cafe|warehouse]",
        "slot_uri": "MIXS:0000825"
      },
      "room_vol": {
        "is_a": "core field",
        "title": "room volume",
        "description": "Volume of sampling room",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: cubic feet, cubic meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{integer} {unit}",
        "slot_uri": "MIXS:0000195"
      },
      "room_window_count": {
        "is_a": "core field",
        "title": "room window count",
        "description": "Number of windows in the room",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000237"
      },
      "room_connected": {
        "is_a": "core field",
        "title": "rooms connected by a doorway",
        "description": "List of rooms connected to the sampling room by a doorway",
        "range": "room_connected_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "office"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[attic|bathroom|closet|conference room|elevator|examining room|hallway|kitchen|mail room|office|stairwell]",
        "slot_uri": "MIXS:0000826"
      },
      "room_hallway": {
        "is_a": "core field",
        "title": "rooms that are on the same hallway",
        "description": "List of room(s) (room number, room name) located in the same hallway as sampling room",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: room name;room number",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{text};{integer}",
        "slot_uri": "MIXS:0000238"
      },
      "room_door_share": {
        "is_a": "core field",
        "title": "rooms that share a door with sampling room",
        "description": "List of room(s) (room number, room name) sharing a door with the sampling room",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: room name;room number",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{text};{integer}",
        "slot_uri": "MIXS:0000242"
      },
      "room_wall_share": {
        "is_a": "core field",
        "title": "rooms that share a wall with sampling room",
        "description": "List of room(s) (room number, room name) sharing a wall with the sampling room",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: room name;room number",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{text};{integer}",
        "slot_uri": "MIXS:0000243"
      },
      "samp_weather": {
        "is_a": "core field",
        "title": "sampling day weather",
        "description": "The weather on the sampling day",
        "range": "samp_weather_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "foggy"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[clear sky|cloudy|foggy|hail|rain|snow|sleet|sunny|windy]",
        "slot_uri": "MIXS:0000827"
      },
      "samp_floor": {
        "is_a": "core field",
        "title": "sampling floor",
        "description": "The floor of the building, where the sampling room is located",
        "range": "samp_floor_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "4th floor"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[1st floor|2nd floor|{integer} floor|basement|lobby]",
        "slot_uri": "MIXS:0000828"
      },
      "samp_room_id": {
        "is_a": "core field",
        "title": "sampling room ID or name",
        "description": "Sampling room number. This ID should be consistent with the designations on the building floor plans",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000244"
      },
      "samp_time_out": {
        "is_a": "core field",
        "title": "sampling time outside",
        "description": "The recent and long term history of outside sampling",
        "range": "double",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: time",
          "Preferred unit: hour",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000196"
      },
      "season": {
        "is_a": "core field",
        "title": "season",
        "description": "The season when sampling occurred. Any of the four periods into which the year is divided by the equinoxes and solstices. This field accepts terms listed under season (http://purl.obolibrary.org/obo/NCIT_C94729).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "autumn [NCIT:C94733]"
          }
        ],
        "comments": [
          "Expected value: NCIT:C94729",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000829"
      },
      "season_use": {
        "is_a": "core field",
        "title": "seasonal use",
        "description": "The seasons the space is occupied",
        "range": "season_use_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Winter"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[Spring|Summer|Fall|Winter]",
        "slot_uri": "MIXS:0000830"
      },
      "shading_device_cond": {
        "is_a": "core field",
        "title": "shading device condition",
        "description": "The physical condition of the shading device at the time of sampling",
        "range": "shading_device_cond_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "new"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[damaged|needs repair|new|rupture|visible wear]",
        "slot_uri": "MIXS:0000831"
      },
      "shading_device_loc": {
        "is_a": "core field",
        "title": "shading device location",
        "description": "The location of the shading device in relation to the built structure",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "exterior"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[exterior|interior]",
        "slot_uri": "MIXS:0000832"
      },
      "shading_device_mat": {
        "is_a": "core field",
        "title": "shading device material",
        "description": "The material the shading device is composed of",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: material name",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000245"
      },
      "shad_dev_water_mold": {
        "is_a": "core field",
        "title": "shading device signs of water/mold",
        "description": "Signs of the presence of mold or mildew on the shading device",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "no presence of mold visible"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[presence of mold visible|no presence of mold visible]",
        "slot_uri": "MIXS:0000834"
      },
      "shading_device_type": {
        "is_a": "core field",
        "title": "shading device type",
        "description": "The type of shading device",
        "range": "shading_device_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "slatted aluminum awning"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[bahama shutters|exterior roll blind|gambrel awning|hood awning|porchroller awning|sarasota shutters|slatted aluminum|solid aluminum awning|sun screen|tree|trellis|venetian awning]",
        "slot_uri": "MIXS:0000835"
      },
      "specific_humidity": {
        "is_a": "core field",
        "title": "specific humidity",
        "description": "The mass of water vapour in a unit mass of moist air, usually expressed as grams of vapour per kilogram of air, or, in air conditioning, as grains per pound.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "15 per kilogram of air"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: gram of air, kilogram of air",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000214"
      },
      "specific": {
        "is_a": "core field",
        "title": "specifications",
        "description": "The building specifications. If design is chosen, indicate phase: conceptual, schematic, design development, construction documents",
        "range": "specific_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "construction"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[operation|as built|construction|bid|design|photos]",
        "slot_uri": "MIXS:0000836"
      },
      "temp_out": {
        "is_a": "core field",
        "title": "temperature outside house",
        "description": "The recorded temperature value at sampling time outside",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000197"
      },
      "train_line": {
        "is_a": "core field",
        "title": "train line",
        "description": "The subway line name",
        "range": "train_line_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "red"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[red|green|orange]",
        "slot_uri": "MIXS:0000837"
      },
      "train_stat_loc": {
        "is_a": "core field",
        "title": "train station collection location",
        "description": "The train station collection location",
        "range": "train_stat_loc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "forest hills"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[south station above ground|south station underground|south station amtrak|forest hills|riverside]",
        "slot_uri": "MIXS:0000838"
      },
      "train_stop_loc": {
        "is_a": "core field",
        "title": "train stop collection location",
        "description": "The train stop collection location",
        "range": "train_stop_loc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "end"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[end|mid|downtown]",
        "slot_uri": "MIXS:0000839"
      },
      "vis_media": {
        "is_a": "core field",
        "title": "visual media",
        "description": "The building visual media",
        "range": "vis_media_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "3D scans"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[photos|videos|commonly of the building|site context (adjacent buildings, vegetation, terrain, streets)|interiors|equipment|3D scans]",
        "slot_uri": "MIXS:0000840"
      },
      "wall_area": {
        "is_a": "core field",
        "title": "wall area",
        "description": "The total area of the sampled room's walls",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000198"
      },
      "wall_const_type": {
        "is_a": "core field",
        "title": "wall construction type",
        "description": "The building class of the wall defined by the composition of the building elements and fire-resistance rating.",
        "range": "wall_const_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "fire resistive"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[frame construction|joisted masonry|light noncombustible|masonry noncombustible|modified fire resistive|fire resistive]",
        "slot_uri": "MIXS:0000841"
      },
      "wall_finish_mat": {
        "is_a": "core field",
        "title": "wall finish material",
        "description": "The material utilized to finish the outer most layer of the wall",
        "range": "wall_finish_mat_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "wood"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[plaster|gypsum plaster|veneer plaster|gypsum board|tile|terrazzo|stone facing|acoustical treatment|wood|metal|masonry]",
        "slot_uri": "MIXS:0000842"
      },
      "wall_height": {
        "is_a": "core field",
        "title": "wall height",
        "description": "The average height of the walls in the sampled room",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Preferred unit: centimeter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000221"
      },
      "wall_loc": {
        "is_a": "core field",
        "title": "wall location",
        "description": "The relative location of the wall within the room",
        "range": "wall_loc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "north"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[north|south|east|west]",
        "slot_uri": "MIXS:0000843"
      },
      "wall_water_mold": {
        "is_a": "core field",
        "title": "wall signs of water/mold",
        "description": "Signs of the presence of mold or mildew on a wall",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "no presence of mold visible"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[presence of mold visible|no presence of mold visible]",
        "slot_uri": "MIXS:0000844"
      },
      "wall_surf_treatment": {
        "is_a": "core field",
        "title": "wall surface treatment",
        "description": "The surface treatment of interior wall",
        "range": "wall_surf_treatment_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "paneling"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[painted|wall paper|no treatment|paneling|stucco|fabric]",
        "slot_uri": "MIXS:0000845"
      },
      "wall_texture": {
        "is_a": "core field",
        "title": "wall texture",
        "description": "The feel, appearance, or consistency of a wall surface",
        "range": "wall_texture_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "popcorn"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[crows feet|crows-foot stomp||double skip|hawk and trowel|knockdown|popcorn|orange peel|rosebud stomp|Santa-Fe texture|skip trowel|smooth|stomp knockdown|swirl]",
        "slot_uri": "MIXS:0000846"
      },
      "wall_thermal_mass": {
        "is_a": "core field",
        "title": "wall thermal mass",
        "description": "The ability of the wall to provide inertia against temperature fluctuations. Generally this means concrete or concrete block that is either exposed or covered only with paint",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: joule per degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000222"
      },
      "water_feat_size": {
        "is_a": "core field",
        "title": "water feature size",
        "description": "The size of the water feature",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: square meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000223"
      },
      "water_feat_type": {
        "is_a": "core field",
        "title": "water feature type",
        "description": "The type of water feature present within the building being sampled",
        "range": "water_feat_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "stream"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[fountain|pool|standing feature|stream|waterfall]",
        "slot_uri": "MIXS:0000847"
      },
      "weekday": {
        "is_a": "core field",
        "title": "weekday",
        "description": "The day of the week when sampling occurred",
        "range": "weekday_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Sunday"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday]",
        "slot_uri": "MIXS:0000848"
      },
      "window_size": {
        "is_a": "core field",
        "title": "window area/size",
        "description": "The window's length and width",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: inch, meter",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "{float} {unit} x {float} {unit}",
        "slot_uri": "MIXS:0000224"
      },
      "window_cond": {
        "is_a": "core field",
        "title": "window condition",
        "description": "The physical condition of the window at the time of sampling",
        "range": "window_cond_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "rupture"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[damaged|needs repair|new|rupture|visible wear]",
        "slot_uri": "MIXS:0000849"
      },
      "window_cover": {
        "is_a": "core field",
        "title": "window covering",
        "description": "The type of window covering",
        "range": "window_cover_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "curtains"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[blinds|curtains|none]",
        "slot_uri": "MIXS:0000850"
      },
      "window_horiz_pos": {
        "is_a": "core field",
        "title": "window horizontal position",
        "description": "The horizontal position of the window on the wall",
        "range": "window_horiz_pos_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "middle"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[left|middle|right]",
        "slot_uri": "MIXS:0000851"
      },
      "window_loc": {
        "is_a": "core field",
        "title": "window location",
        "description": "The relative location of the window within the room",
        "range": "window_loc_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "west"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[north|south|east|west]",
        "slot_uri": "MIXS:0000852"
      },
      "window_mat": {
        "is_a": "core field",
        "title": "window material",
        "description": "The type of material used to finish a window",
        "range": "window_mat_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "wood"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[clad|fiberglass|metal|vinyl|wood]",
        "slot_uri": "MIXS:0000853"
      },
      "window_open_freq": {
        "is_a": "core field",
        "title": "window open frequency",
        "description": "The number of times windows are opened per week",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: value",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "slot_uri": "MIXS:0000246"
      },
      "window_water_mold": {
        "is_a": "core field",
        "title": "window signs of water/mold",
        "description": "Signs of the presence of mold or mildew on the window.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "no presence of mold visible"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[presence of mold visible|no presence of mold visible]",
        "slot_uri": "MIXS:0000854"
      },
      "window_status": {
        "is_a": "core field",
        "title": "window status",
        "description": "Defines whether the windows were open or closed during environmental testing",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "open"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[closed|open]",
        "slot_uri": "MIXS:0000855"
      },
      "window_type": {
        "is_a": "core field",
        "title": "window type",
        "description": "The type of windows",
        "range": "window_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "fixed window"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[single-hung sash window|horizontal sash window|fixed window]",
        "slot_uri": "MIXS:0000856"
      },
      "window_vert_pos": {
        "is_a": "core field",
        "title": "window vertical position",
        "description": "The vertical position of the window on the wall",
        "range": "window_vert_pos_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "middle"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: built environment"
        ],
        "pattern": "[bottom|middle|top|low|middle|high]",
        "slot_uri": "MIXS:0000857"
      },
      "ances_data": {
        "is_a": "core field",
        "title": "ancestral data",
        "description": "Information about either pedigree or other ancestral information description (e.g. parental variety in case of mutant or selection), e.g. A/3*B (meaning [(A x B) x B] x B)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "A/3*B"
          }
        ],
        "comments": [
          "Expected value: free text",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000247"
      },
      "biol_stat": {
        "is_a": "core field",
        "title": "biological status",
        "description": "The level of genome modification.",
        "range": "biol_stat_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "natural"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "[wild|natural|semi-natural|inbred line|breeder's line|hybrid|clonal selection|mutant]",
        "slot_uri": "MIXS:0000858"
      },
      "genetic_mod": {
        "is_a": "core field",
        "title": "genetic modification",
        "description": "Genetic modifications of the genome of an organism, which may occur naturally by spontaneous mutation, or be introduced by some experimental means, e.g. specification of a transgene or the gene knocked-out or details of transient transfection",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "aox1A transgenic"
          }
        ],
        "comments": [
          "Expected value: PMID,DOI,url or free text",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "{PMID}|{DOI}|{URL}|{text}",
        "slot_uri": "MIXS:0000859"
      },
      "host_common_name": {
        "is_a": "core field",
        "title": "host common name",
        "description": "Common name of the host.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "human"
          }
        ],
        "comments": [
          "Expected value: common name",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000248"
      },
      "samp_capt_status": {
        "is_a": "core field",
        "title": "sample capture status",
        "description": "Reason for the sample",
        "range": "samp_capt_status_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "farm sample"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "[active surveillance in response to an outbreak|active surveillance not initiated by an outbreak|farm sample|market sample|other]",
        "slot_uri": "MIXS:0000860"
      },
      "samp_dis_stage": {
        "is_a": "core field",
        "title": "sample disease stage",
        "description": "Stage of the disease at the time of sample collection, e.g. inoculation, penetration, infection, growth and reproduction, dissemination of pathogen.",
        "range": "samp_dis_stage_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "infection"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "[dissemination|growth and reproduction|infection|inoculation|penetration|other]",
        "slot_uri": "MIXS:0000249"
      },
      "host_taxid": {
        "is_a": "core field",
        "title": "host taxid",
        "description": "NCBI taxon id of the host, e.g. 9606",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "7955"
          }
        ],
        "comments": [
          "Expected value: NCBI taxon identifier",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "{NCBI taxid}",
        "slot_uri": "MIXS:0000250"
      },
      "host_subject_id": {
        "is_a": "core field",
        "title": "host subject id",
        "description": "A unique identifier by which each subject can be referred to, de-identified.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "MPI123"
          }
        ],
        "comments": [
          "Expected value: unique identifier",
          "Occurrence: 1",
          "This field is used in: 6 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000861"
      },
      "host_age": {
        "is_a": "core field",
        "title": "host age",
        "description": "Age of host at the time of sampling; relevant scale depends on species and study, e.g. Could be seconds for amoebae or centuries for trees",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "10 days"
          }
        ],
        "comments": [
          "Expected value: value",
          "Preferred unit: year, day, hour",
          "Occurrence: 1",
          "This field is used in: 7 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, plant-associated"
        ],
        "slot_uri": "MIXS:0000255"
      },
      "host_life_stage": {
        "is_a": "core field",
        "title": "host life stage",
        "description": "Description of life stage of host",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "adult"
          }
        ],
        "comments": [
          "Expected value: stage",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000251"
      },
      "host_sex": {
        "is_a": "core field",
        "title": "host sex",
        "description": "Gender or physical sex of the host.",
        "range": "host_sex_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "non-binary"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 6 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "[female|hermaphrodite|non-binary|male|transgender|transgender (female to male)|transgender (male to female) |undeclared]",
        "slot_uri": "MIXS:0000811"
      },
      "host_body_habitat": {
        "is_a": "core field",
        "title": "host body habitat",
        "description": "Original body habitat where the sample was obtained from",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "nasopharynx"
          }
        ],
        "comments": [
          "Expected value: free text",
          "Occurrence: 1",
          "This field is used uniquely in: host-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000866"
      },
      "host_body_site": {
        "is_a": "core field",
        "title": "host body site",
        "description": "Name of body site where the sample was obtained from, such as a specific organ or tissue (tongue, lung etc...). For foundational model of anatomy ontology (fma) (v 4.11.0) or Uber-anatomy ontology (UBERON) (v releases/2014-06-15) terms, please see http://purl.bioontology.org/ontology/FMA or http://purl.bioontology.org/ontology/UBERON",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "gill [UBERON:0002535]"
          }
        ],
        "comments": [
          "Expected value: FMA or UBERON",
          "Occurrence: 1",
          "This field is used in: 6 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000867"
      },
      "host_body_product": {
        "is_a": "core field",
        "title": "host body product",
        "description": "Substance produced by the body, e.g. Stool, mucus, where the sample was obtained from. For foundational model of anatomy ontology (fma) or Uber-anatomy ontology (UBERON) terms, please see https://www.ebi.ac.uk/ols/ontologies/fma or https://www.ebi.ac.uk/ols/ontologies/uberon",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Portion of mucus [fma66938]"
          }
        ],
        "comments": [
          "Expected value: FMA or UBERON",
          "Occurrence: 1",
          "This field is used in: 6 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000888"
      },
      "host_tot_mass": {
        "is_a": "core field",
        "title": "host total mass",
        "description": "Total mass of the host at collection, the unit depends on host",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "2500 gram"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: kilogram, gram",
          "Occurrence: 1",
          "This field is used in: 7 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, plant-associated"
        ],
        "slot_uri": "MIXS:0000263"
      },
      "host_height": {
        "is_a": "core field",
        "title": "host height",
        "description": "The height of subject",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.1 meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: centimeter, millimeter, meter",
          "Occurrence: 1",
          "This field is used in: 7 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, plant-associated"
        ],
        "slot_uri": "MIXS:0000264"
      },
      "host_length": {
        "is_a": "core field",
        "title": "host length",
        "description": "The length of subject",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1 meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: centimeter, millimeter, meter",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "slot_uri": "MIXS:0000256"
      },
      "host_diet": {
        "is_a": "core field",
        "title": "host diet",
        "description": "Type of diet depending on the host, for animals omnivore, herbivore etc., for humans high-fat, meditteranean etc.; can include multiple diet types",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "herbivore"
          }
        ],
        "comments": [
          "Expected value: diet type",
          "Occurrence: m",
          "This field is used in: 6 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000869"
      },
      "host_last_meal": {
        "is_a": "core field",
        "title": "host last meal",
        "description": "Content of last meal and time since feeding; can include multiple values",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "corn feed;P2H"
          }
        ],
        "comments": [
          "Expected value: content;duration",
          "Occurrence: m",
          "This field is used in: 6 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "{text};{duration}",
        "slot_uri": "MIXS:0000870"
      },
      "host_growth_cond": {
        "is_a": "core field",
        "title": "host growth conditions",
        "description": "Literature reference giving growth conditions of the host",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "https://academic.oup.com/icesjms/article/68/2/349/617247"
          }
        ],
        "comments": [
          "Expected value: PMID,DOI,url or free text",
          "Occurrence: 1",
          "This field is used uniquely in: host-associated"
        ],
        "pattern": "{PMID}|{DOI}|{URL}|{text}",
        "slot_uri": "MIXS:0000871"
      },
      "host_substrate": {
        "is_a": "core field",
        "title": "host substrate",
        "description": "The growth substrate of the host.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "rock"
          }
        ],
        "comments": [
          "Expected value: substrate name",
          "Occurrence: 1",
          "This field is used uniquely in: host-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000252"
      },
      "host_family_relation": {
        "is_a": "core field",
        "title": "host family relationship",
        "description": "Familial relationships to other hosts in the same study; can include multiple relationships",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "offspring;Mussel25"
          }
        ],
        "comments": [
          "Expected value: relationship type;arbitrary identifier",
          "Occurrence: m",
          "This field is used in: 6 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "{text};{text}",
        "slot_uri": "MIXS:0000872"
      },
      "host_infra_spec_name": {
        "is_a": "core field",
        "title": "host infra-specific name",
        "description": "Taxonomic information about the host below subspecies level",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "borealis"
          }
        ],
        "comments": [
          "Expected value: name",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000253"
      },
      "host_infra_spec_rank": {
        "is_a": "core field",
        "title": "host infra-specific rank",
        "description": "Taxonomic rank information about the host below subspecies level, such as variety, form, rank etc.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "subspecies"
          }
        ],
        "comments": [
          "Expected value: rank",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000254"
      },
      "host_subspecf_genlin": {
        "is_a": "core field",
        "title": "host subspecific genetic lineage",
        "description": "Information about the genetic distinctness of the host organism below the subspecies level, e.g., serovar, serotype, biotype, ecotype, or any relevant genetic typing schemes like Group I plasmid. Subspecies should not be recorded in this term, but in the NCBI taxonomy. Supply both the lineage name and the lineage rank separated by a colon, e.g., biovar:abc123.",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "subvariety:glabrum"
          }
        ],
        "comments": [
          "Expected value: Genetic lineage below lowest rank of NCBI taxonomy, which is subspecies, e.g. serovar, biotype, ecotype, plus genetic lineage name.",
          "Occurrence: m",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "pattern": "{rank name}:{text}",
        "slot_uri": "MIXS:0001318"
      },
      "host_genotype": {
        "is_a": "core field",
        "title": "host genotype",
        "description": "Observed genotype",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "C57BL/6"
          }
        ],
        "comments": [
          "Expected value: genotype",
          "Occurrence: 1",
          "This field is used in: 7 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000365"
      },
      "host_phenotype": {
        "is_a": "core field",
        "title": "host phenotype",
        "description": "Phenotype of human or other host. For phenotypic quality ontology (pato) (v 2018-03-27) terms, please see http://purl.bioontology.org/ontology/pato. For Human Phenotype Ontology (HP) (v 2018-06-13) please see http://purl.bioontology.org/ontology/HP",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "elongated [PATO:0001154]"
          }
        ],
        "comments": [
          "Expected value: PATO or HP",
          "Occurrence: 1",
          "This field is used in: 7 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, plant-associated"
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000874"
      },
      "host_body_temp": {
        "is_a": "core field",
        "title": "host body temperature",
        "description": "Core body temperature of the host when sample was collected",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "15 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used in: 6 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "slot_uri": "MIXS:0000274"
      },
      "host_dry_mass": {
        "is_a": "core field",
        "title": "host dry mass",
        "description": "Measurement of dry mass",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "500 gram"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: kilogram, gram",
          "Occurrence: 1",
          "This field is used in: 2 packages: host-associated, plant-associated"
        ],
        "slot_uri": "MIXS:0000257"
      },
      "blood_press_diast": {
        "is_a": "core field",
        "title": "host blood pressure diastolic",
        "description": "Resting diastolic blood pressure, measured as mm mercury",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millimeter mercury",
          "Occurrence: 1",
          "This field is used uniquely in: host-associated"
        ],
        "slot_uri": "MIXS:0000258"
      },
      "blood_press_syst": {
        "is_a": "core field",
        "title": "host blood pressure systolic",
        "description": "Resting systolic blood pressure, measured as mm mercury",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millimeter mercury",
          "Occurrence: 1",
          "This field is used uniquely in: host-associated"
        ],
        "slot_uri": "MIXS:0000259"
      },
      "host_color": {
        "is_a": "core field",
        "title": "host color",
        "description": "The color of host",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: color",
          "Occurrence: 1",
          "This field is used uniquely in: host-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000260"
      },
      "host_shape": {
        "is_a": "core field",
        "title": "host shape",
        "description": "Morphological shape of host",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "round"
          }
        ],
        "comments": [
          "Expected value: shape",
          "Occurrence: 1",
          "This field is used uniquely in: host-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000261"
      },
      "gravidity": {
        "is_a": "core field",
        "title": "gravidity",
        "description": "Whether or not subject is gravid, and if yes date due or date post-conception, specifying which is used",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes;due date:2018-05-11"
          }
        ],
        "comments": [
          "Expected value: gravidity status;timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: host-associated"
        ],
        "pattern": "{boolean};{timestamp}",
        "slot_uri": "MIXS:0000875"
      },
      "host_symbiont": {
        "is_a": "core field",
        "title": "observed host symbionts",
        "description": "The taxonomic name of the organism(s) found living in mutualistic, commensalistic, or parasitic symbiosis with the specific host.",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "flukeworms"
          }
        ],
        "comments": [
          "Expected value: species name or common name",
          "Occurrence: m",
          "This field is used in: 7 packages: host-associated, human-associated, human-gut, human-oral, human-skin, human-vaginal, plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0001298"
      },
      "ihmc_medication_code": {
        "is_a": "core field",
        "title": "IHMC medication code",
        "description": "Can include multiple medication codes",
        "range": "integer",
        "multivalued": true,
        "examples": [
          {
            "value": "810"
          }
        ],
        "comments": [
          "Expected value: IHMC code",
          "Occurrence: m",
          "This field is used in: 5 packages: human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "slot_uri": "MIXS:0000884"
      },
      "smoker": {
        "is_a": "core field",
        "title": "smoker",
        "description": "Specification of smoking status",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes"
          }
        ],
        "comments": [
          "Expected value: smoking status",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{boolean}",
        "slot_uri": "MIXS:0000262"
      },
      "host_hiv_stat": {
        "is_a": "core field",
        "title": "host HIV status",
        "description": "HIV status of subject, if yes HAART initiation status should also be indicated as [YES or NO]",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes;yes"
          }
        ],
        "comments": [
          "Expected value: HIV status;HAART initiation status",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{boolean};{boolean}",
        "slot_uri": "MIXS:0000265"
      },
      "drug_usage": {
        "is_a": "core field",
        "title": "drug usage",
        "description": "Any drug used by subject and the frequency of usage; can include multiple drugs used",
        "range": "drug_usage_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "Lipitor;2/day"
          }
        ],
        "comments": [
          "Expected value: drug name;frequency",
          "Occurrence: m",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text};{integer}/[year|month|week|day|hour]",
        "slot_uri": "MIXS:0000894"
      },
      "host_body_mass_index": {
        "is_a": "core field",
        "title": "host body-mass index",
        "description": "Body mass index, calculated as weight/(height)squared",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "22 kilogram per square meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: kilogram per square meter",
          "Occurrence: 1",
          "This field is used in: 5 packages: human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "slot_uri": "MIXS:0000317"
      },
      "diet_last_six_month": {
        "is_a": "core field",
        "title": "major diet change in last six months",
        "description": "Specification of major diet changes in the last six months, if yes the change should be specified",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes;vegetarian diet"
          }
        ],
        "comments": [
          "Expected value: diet change;current diet",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{boolean};{text}",
        "slot_uri": "MIXS:0000266"
      },
      "weight_loss_3_month": {
        "is_a": "core field",
        "title": "weight loss in last three months",
        "description": "Specification of weight loss in the last three months, if yes should be further specified to include amount of weight loss",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes;5 kilogram"
          }
        ],
        "comments": [
          "Expected value: weight loss specification;measurement value",
          "Preferred unit: kilogram, gram",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{boolean};{float} {unit}",
        "slot_uri": "MIXS:0000295"
      },
      "ethnicity": {
        "is_a": "core field",
        "title": "ethnicity",
        "description": "A category of people who identify with each other, usually on the basis of presumed similarities such as a common language, ancestry, history, society, culture, nation or social treatment within their residing area. https://en.wikipedia.org/wiki/List_of_contemporary_ethnic_groups",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "native american"
          }
        ],
        "comments": [
          "Expected value: text recommend from Wikipedia list",
          "Occurrence: m",
          "This field is used in: 5 packages: human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000895"
      },
      "host_occupation": {
        "is_a": "core field",
        "title": "host occupation",
        "description": "Most frequent job performed by subject",
        "range": "integer",
        "multivalued": false,
        "examples": [
          {
            "value": "veterinary"
          }
        ],
        "comments": [
          "Expected value: IHMC code",
          "Occurrence: 1",
          "This field is used in: 5 packages: human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "slot_uri": "MIXS:0000896"
      },
      "pet_farm_animal": {
        "is_a": "core field",
        "title": "presence of pets or farm animals",
        "description": "Specification of presence of pets or farm animals in the environment of subject, if yes the animals should be specified; can include multiple animals present",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "yes; 5 cats"
          }
        ],
        "comments": [
          "Expected value: presence status;type of animal or pet",
          "Occurrence: m",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{boolean};{text}",
        "slot_uri": "MIXS:0000267"
      },
      "travel_out_six_month": {
        "is_a": "core field",
        "title": "travel outside the country in last six months",
        "description": "Specification of the countries travelled in the last six months; can include multiple travels",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: country name",
          "Occurrence: m",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000268"
      },
      "twin_sibling": {
        "is_a": "core field",
        "title": "twin sibling presence",
        "description": "Specification of twin sibling presence",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes"
          }
        ],
        "comments": [
          "Expected value: presence status",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{boolean}",
        "slot_uri": "MIXS:0000326"
      },
      "medic_hist_perform": {
        "is_a": "core field",
        "title": "medical history performed",
        "description": "Whether full medical history was collected",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "TRUE"
          }
        ],
        "comments": [
          "Expected value: true or false",
          "Occurrence: 1",
          "This field is used in: 5 packages: human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "pattern": "{boolean}",
        "slot_uri": "MIXS:0000897"
      },
      "study_complt_stat": {
        "is_a": "core field",
        "title": "study completion status",
        "description": "Specification of study completion status, if no the reason should be specified",
        "range": "study_complt_stat_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "no;non-compliance"
          }
        ],
        "comments": [
          "Expected value: YES or NO due to (1)adverse event (2) non-compliance (3) lost to follow up (4)other-specify",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{boolean};[adverse event|non-compliance|lost to follow up|other-specify]",
        "slot_uri": "MIXS:0000898"
      },
      "pulmonary_disord": {
        "is_a": "core field",
        "title": "lung/pulmonary disorder",
        "description": "History of pulmonary disorders; can include multiple disorders. The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, lung disease (https://disease-ontology.org/?id=DOID:850).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000269"
      },
      "nose_throat_disord": {
        "is_a": "core field",
        "title": "lung/nose-throat disorder",
        "description": "History of nose-throat disorders; can include multiple disorders,  The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, lung disease (https://disease-ontology.org/?id=DOID:850), upper respiratory tract disease (https://disease-ontology.org/?id=DOID:974).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used in: 2 packages: human-associated, human-oral"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000270"
      },
      "blood_blood_disord": {
        "is_a": "core field",
        "title": "blood/blood disorder",
        "description": "History of blood disorders; can include multiple disorders.  The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, hematopoietic system disease (https://disease-ontology.org/?id=DOID:74).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000271"
      },
      "host_pulse": {
        "is_a": "core field",
        "title": "host pulse",
        "description": "Resting pulse, measured as beats per minute",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "65 beats per minute"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: beats per minute",
          "Occurrence: 1",
          "This field is used in: 5 packages: human-associated, human-gut, human-oral, human-skin, human-vaginal"
        ],
        "slot_uri": "MIXS:0000333"
      },
      "gestation_state": {
        "is_a": "core field",
        "title": "amniotic fluid/gestation state",
        "description": "Specification of the gestation state",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: gestation state",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000272"
      },
      "maternal_health_stat": {
        "is_a": "core field",
        "title": "amniotic fluid/maternal health status",
        "description": "Specification of the maternal health status",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: health status",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000273"
      },
      "foetal_health_stat": {
        "is_a": "core field",
        "title": "amniotic fluid/foetal health status",
        "description": "Specification of foetal health status, should also include abortion",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: health status",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000275"
      },
      "amniotic_fluid_color": {
        "is_a": "core field",
        "title": "amniotic fluid/color",
        "description": "Specification of the color of the amniotic fluid sample",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: color",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000276"
      },
      "kidney_disord": {
        "is_a": "core field",
        "title": "urine/kidney disorder",
        "description": "History of kidney disorders; can include multiple disorders. The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, kidney disease (https://disease-ontology.org/?id=DOID:557).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000277"
      },
      "urogenit_tract_disor": {
        "is_a": "core field",
        "title": "urine/urogenital tract disorder",
        "description": "History of urogenital tract disorders; can include multiple disorders. The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, urinary system disease (https://disease-ontology.org/?id=DOID:18).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000278"
      },
      "urine_collect_meth": {
        "is_a": "core field",
        "title": "urine/collection method",
        "description": "Specification of urine collection method",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "catheter"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: human-associated"
        ],
        "pattern": "[clean catch|catheter]",
        "slot_uri": "MIXS:0000899"
      },
      "gastrointest_disord": {
        "is_a": "core field",
        "title": "gastrointestinal tract disorder",
        "description": "History of gastrointestinal tract disorders; can include multiple disorders. History of blood disorders; can include multiple disorders.  The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, gastrointestinal system disease (https://disease-ontology.org/?id=DOID:77).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used uniquely in: human-gut"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000280"
      },
      "liver_disord": {
        "is_a": "core field",
        "title": "liver disorder",
        "description": "History of liver disorders; can include multiple disorders. The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, liver disease (https://disease-ontology.org/?id=DOID:409).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used uniquely in: human-gut"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000282"
      },
      "special_diet": {
        "is_a": "core field",
        "title": "special diet",
        "description": "Specification of special diet; can include multiple special diets",
        "range": "special_diet_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "other:vegan"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: m",
          "This field is used uniquely in: human-gut"
        ],
        "pattern": "[low carb|reduced calorie|vegetarian|other(to be specified)]",
        "slot_uri": "MIXS:0000905"
      },
      "time_last_toothbrush": {
        "is_a": "core field",
        "title": "time since last toothbrushing",
        "description": "Specification of the time since last toothbrushing",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "P2H45M"
          }
        ],
        "comments": [
          "Expected value: duration",
          "Occurrence: 1",
          "This field is used uniquely in: human-oral"
        ],
        "pattern": "{duration}",
        "slot_uri": "MIXS:0000924"
      },
      "dermatology_disord": {
        "is_a": "core field",
        "title": "dermatology disorder",
        "description": "History of dermatology disorders; can include multiple disorders. The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, skin disease (https://disease-ontology.org/?id=DOID:37).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used uniquely in: human-skin"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000284"
      },
      "time_since_last_wash": {
        "is_a": "core field",
        "title": "time since last wash",
        "description": "Specification of the time since last wash",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "P1D"
          }
        ],
        "comments": [
          "Expected value: duration",
          "Occurrence: 1",
          "This field is used uniquely in: human-skin"
        ],
        "pattern": "{duration}",
        "slot_uri": "MIXS:0000943"
      },
      "dominant_hand": {
        "is_a": "core field",
        "title": "dominant hand",
        "description": "Dominant hand of the subject",
        "range": "dominant_hand_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "right"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: human-skin"
        ],
        "pattern": "[left|right|ambidextrous]",
        "slot_uri": "MIXS:0000944"
      },
      "menarche": {
        "is_a": "core field",
        "title": "menarche",
        "description": "Date of most recent menstruation",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: human-vaginal"
        ],
        "slot_uri": "MIXS:0000965"
      },
      "sexual_act": {
        "is_a": "core field",
        "title": "sexual activity",
        "description": "Current sexual partner and frequency of sex",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: partner sex;frequency",
          "Occurrence: 1",
          "This field is used uniquely in: human-vaginal"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000285"
      },
      "pregnancy": {
        "is_a": "core field",
        "title": "pregnancy",
        "description": "Date due of pregnancy",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: human-vaginal"
        ],
        "slot_uri": "MIXS:0000966"
      },
      "douche": {
        "is_a": "core field",
        "title": "douche",
        "description": "Date of most recent douche",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: human-vaginal"
        ],
        "slot_uri": "MIXS:0000967"
      },
      "birth_control": {
        "is_a": "core field",
        "title": "birth control",
        "description": "Specification of birth control medication used",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: medication name",
          "Occurrence: 1",
          "This field is used uniquely in: human-vaginal"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000286"
      },
      "menopause": {
        "is_a": "core field",
        "title": "menopause",
        "description": "Date of onset of menopause",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: human-vaginal"
        ],
        "slot_uri": "MIXS:0000968"
      },
      "hrt": {
        "is_a": "core field",
        "title": "HRT",
        "description": "Whether subject had hormone replacement theraphy, and if yes start date",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: human-vaginal"
        ],
        "slot_uri": "MIXS:0000969"
      },
      "hysterectomy": {
        "is_a": "core field",
        "title": "hysterectomy",
        "description": "Specification of whether hysterectomy was performed",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "no"
          }
        ],
        "comments": [
          "Expected value: hysterectomy status",
          "Occurrence: 1",
          "This field is used uniquely in: human-vaginal"
        ],
        "pattern": "{boolean}",
        "slot_uri": "MIXS:0000287"
      },
      "gynecologic_disord": {
        "is_a": "core field",
        "title": "gynecological disorder",
        "description": "History of gynecological disorders; can include multiple disorders. The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, female reproductive system disease (https://disease-ontology.org/?id=DOID:229).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: gynecological disorder",
          "Occurrence: m",
          "This field is used uniquely in: human-vaginal"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000288"
      },
      "urogenit_disord": {
        "is_a": "core field",
        "title": "urogenital disorder",
        "description": "History of urogenital disorders, can include multiple disorders. The terms should be chosen from the DO (Human Disease Ontology) at http://www.disease-ontology.org, reproductive system disease (https://disease-ontology.org/?id=DOID:15) or urinary system disease (https://disease-ontology.org/?id=DOID:18).",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: disorder name",
          "Occurrence: m",
          "This field is used uniquely in: human-vaginal"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000289"
      },
      "hcr": {
        "is_a": "core field",
        "title": "hydrocarbon resource type",
        "description": "Main Hydrocarbon Resource type. The term \"Hydrocarbon Resource\" HCR defined as a natural environmental feature containing large amounts of hydrocarbons at high concentrations potentially suitable for commercial exploitation. This term should not be confused with the Hydrocarbon Occurrence term which also includes hydrocarbon-rich environments with currently limited commercial interest such as seeps, outcrops, gas hydrates etc. If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "hcr_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Oil Sand"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[Oil Reservoir|Gas Reservoir|Oil Sand|Coalbed|Shale|Tight Oil Reservoir|Tight Gas Reservoir|other]",
        "slot_uri": "MIXS:0000988"
      },
      "hc_produced": {
        "is_a": "core field",
        "title": "hydrocarbon type produced",
        "description": "Main hydrocarbon type produced from resource (i.e. Oil, gas, condensate, etc). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "hc_produced_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Gas"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[Oil|Gas-Condensate|Gas|Bitumen|Coalbed Methane|other]",
        "slot_uri": "MIXS:0000989"
      },
      "basin": {
        "is_a": "core field",
        "title": "basin name",
        "description": "Name of the basin (e.g. Campos)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000290"
      },
      "field": {
        "is_a": "core field",
        "title": "field name",
        "description": "Name of the hydrocarbon field (e.g. Albacora)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000291"
      },
      "reservoir": {
        "is_a": "core field",
        "title": "reservoir name",
        "description": "Name of the reservoir (e.g. Carapebus)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000303"
      },
      "hcr_temp": {
        "is_a": "core field",
        "title": "hydrocarbon resource original temperature",
        "description": "Original temperature of the hydrocarbon resource",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "150-295 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value range",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{float} - {float} {unit}",
        "slot_uri": "MIXS:0000393"
      },
      "tvdss_of_hcr_temp": {
        "is_a": "core field",
        "title": "depth (TVDSS) of hydrocarbon resource temperature",
        "description": "True vertical depth subsea (TVDSS) of the hydrocarbon resource where the original temperature was measured (e.g. 1345 m).",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000394"
      },
      "hcr_pressure": {
        "is_a": "core field",
        "title": "hydrocarbon resource original pressure",
        "description": "Original pressure of the hydrocarbon resource",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value range",
          "Preferred unit: atmosphere, kilopascal",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{float} - {float} {unit}",
        "slot_uri": "MIXS:0000395"
      },
      "tvdss_of_hcr_press": {
        "is_a": "core field",
        "title": "depth (TVDSS) of hydrocarbon resource pressure",
        "description": "True vertical depth subsea (TVDSS) of the hydrocarbon resource where the original pressure was measured (e.g. 1578 m).",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000397"
      },
      "permeability": {
        "is_a": "core field",
        "title": "permeability",
        "description": "Measure of the ability of a hydrocarbon resource to allow fluids to pass through it. (Additional information: https://en.wikipedia.org/wiki/Permeability_(earth_sciences))",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value range",
          "Preferred unit: mD",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-cores"
        ],
        "pattern": "{integer} - {integer} {unit}",
        "slot_uri": "MIXS:0000404"
      },
      "porosity": {
        "is_a": "core field",
        "title": "porosity",
        "description": "Porosity of deposited sediment is volume of voids divided by the total volume of sample",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value or range",
          "Preferred unit: percentage",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, sediment"
        ],
        "pattern": "{float} - {float} {unit}",
        "slot_uri": "MIXS:0000211"
      },
      "lithology": {
        "is_a": "core field",
        "title": "lithology",
        "description": "Hydrocarbon resource main lithology (Additional information: http://petrowiki.org/Lithology_and_rock_type_determination). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "lithology_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Volcanic"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[Basement|Chalk|Chert|Coal|Conglomerate|Diatomite|Dolomite|Limestone|Sandstone|Shale|Siltstone|Volcanic|other]",
        "slot_uri": "MIXS:0000990"
      },
      "depos_env": {
        "is_a": "core field",
        "title": "depositional environment",
        "description": "Main depositional environment (https://en.wikipedia.org/wiki/Depositional_environment). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "depos_env_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Continental - Alluvial"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[Continental - Alluvial|Continental - Aeolian|Continental - Fluvial|Continental - Lacustrine|Transitional - Deltaic|Transitional - Tidal|Transitional - Lagoonal|Transitional - Beach|Transitional - Lake|Marine - Shallow|Marine - Deep|Marine - Reef|Other - Evaporite|Other - Glacial|Other - Volcanic|other]",
        "slot_uri": "MIXS:0000992"
      },
      "hcr_geol_age": {
        "is_a": "core field",
        "title": "hydrocarbon resource geological age",
        "description": "Geological age of hydrocarbon resource (Additional info: https://en.wikipedia.org/wiki/Period_(geology)). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "hcr_geol_age_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Silurian"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[Archean|Cambrian|Carboniferous|Cenozoic|Cretaceous|Devonian|Jurassic|Mesozoic|Neogene|Ordovician|Paleogene|Paleozoic|Permian|Precambrian|Proterozoic|Silurian|Triassic|other]",
        "slot_uri": "MIXS:0000993"
      },
      "owc_tvdss": {
        "is_a": "core field",
        "title": "oil water contact depth",
        "description": "Depth of the original oil water contact (OWC) zone (average) (m TVDSS)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-cores"
        ],
        "slot_uri": "MIXS:0000405"
      },
      "hcr_fw_salinity": {
        "is_a": "core field",
        "title": "formation water salinity",
        "description": "Original formation water salinity (prior to secondary recovery e.g. Waterflooding) expressed as TDS",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000406"
      },
      "sulfate_fw": {
        "is_a": "core field",
        "title": "sulfate in formation water",
        "description": "Original sulfate concentration in the hydrocarbon resource",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000407"
      },
      "vfa_fw": {
        "is_a": "core field",
        "title": "vfa in formation water",
        "description": "Original volatile fatty acid concentration in the hydrocarbon resource",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000408"
      },
      "sr_kerog_type": {
        "is_a": "core field",
        "title": "source rock kerogen type",
        "description": "Origin of kerogen. Type I: Algal (aquatic), Type II: planktonic and soft plant material (aquatic or terrestrial), Type III: terrestrial woody/ fibrous plant material (terrestrial), Type IV: oxidized recycled woody debris (terrestrial) (additional information: https://en.wikipedia.org/wiki/Kerogen). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "sr_kerog_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Type IV"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-cores"
        ],
        "pattern": "[Type I|Type II|Type III|Type IV|other]",
        "slot_uri": "MIXS:0000994"
      },
      "sr_lithology": {
        "is_a": "core field",
        "title": "source rock lithology",
        "description": "Lithology of source rock (https://en.wikipedia.org/wiki/Source_rock). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "sr_lithology_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Coal"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-cores"
        ],
        "pattern": "[Clastic|Carbonate|Coal|Biosilicieous|other]",
        "slot_uri": "MIXS:0000995"
      },
      "sr_dep_env": {
        "is_a": "core field",
        "title": "source rock depositional environment",
        "description": "Source rock depositional environment (https://en.wikipedia.org/wiki/Source_rock). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "sr_dep_env_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Marine"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-cores"
        ],
        "pattern": "[Lacustine|Fluvioldeltaic|Fluviomarine|Marine|other]",
        "slot_uri": "MIXS:0000996"
      },
      "sr_geol_age": {
        "is_a": "core field",
        "title": "source rock geological age",
        "description": "Geological age of source rock (Additional info: https://en.wikipedia.org/wiki/Period_(geology)). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "sr_geol_age_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Silurian"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-cores"
        ],
        "pattern": "[Archean|Cambrian|Carboniferous|Cenozoic|Cretaceous|Devonian|Jurassic|Mesozoic|Neogene|Ordovician|Paleogene|Paleozoic|Permian|Precambrian|Proterozoic|Silurian|Triassic|other]",
        "slot_uri": "MIXS:0000997"
      },
      "samp_well_name": {
        "is_a": "core field",
        "title": "sample well name",
        "description": "Name of the well (e.g. BXA1123) where sample was taken",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000296"
      },
      "win": {
        "is_a": "core field",
        "title": "well identification number",
        "description": "A unique identifier of a well or wellbore. This is part of the Global Framework for Well Identification initiative which is compiled by the Professional Petroleum Data Management Association (PPDM) in an effort to improve well identification systems. (Supporting information: https://ppdm.org/ and http://dl.ppdm.org/dl/690)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: text",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000297"
      },
      "samp_type": {
        "is_a": "core field",
        "title": "sample type",
        "description": "The type of material from which the sample was obtained. For the Hydrocarbon package, samples include types like core, rock trimmings, drill cuttings, piping section, coupon, pigging debris, solid deposit, produced fluid, produced water, injected water, swabs, etc. For the Food Package, samples are usually categorized as food, body products or tissues, or environmental material. This field accepts terms listed under environmental specimen (http://purl.obolibrary.org/obo/GENEPIO_0001246).",
        "range": "samp_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "solid deposit"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[core|rock trimmings|drill cuttings|piping section|coupon|pigging debris|solid deposit|produced fluid|produced water|injected water|water from treatment plant|fresh water|sea water|drilling fluid|procedural blank|positive control|negative control|other]",
        "slot_uri": "MIXS:0000998"
      },
      "samp_subtype": {
        "is_a": "core field",
        "title": "sample subtype",
        "description": "Name of sample sub-type. For example if \"sample type\" is \"Produced Water\" then subtype could be \"Oil Phase\" or \"Water Phase\". If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "samp_subtype_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "biofilm"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[oil phase|water phase|biofilm|not applicable|other]",
        "slot_uri": "MIXS:0000999"
      },
      "pressure": {
        "is_a": "core field",
        "title": "pressure",
        "description": "Pressure to which the sample is subject to, in atmospheres",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "50 atmosphere"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: atmosphere",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000412"
      },
      "samp_tvdss": {
        "is_a": "core field",
        "title": "sample true vertical depth subsea",
        "description": "Depth of the sample i.e. The vertical distance between the sea level and the sampled position in the subsurface. Depth can be reported as an interval for subsurface samples e.g. 1325.75-1362.25 m",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value or measurement value range",
          "Preferred unit: meter",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-cores"
        ],
        "pattern": "{float}-{float} {unit}",
        "slot_uri": "MIXS:0000409"
      },
      "samp_md": {
        "is_a": "core field",
        "title": "sample measured depth",
        "description": "In non deviated well, measured depth is equal to the true vertical depth, TVD (TVD=TVDSS plus the reference or datum it refers to). In deviated wells, the MD is the length of trajectory of the borehole measured from the same reference or datum. Common datums used are ground level (GL), drilling rig floor (DF), rotary table (RT), kelly bushing (KB) and mean sea level (MSL). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "samp_md_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "1534 meter;MSL"
          }
        ],
        "comments": [
          "Expected value: measurement value;enumeration",
          "Preferred unit: meter",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-cores"
        ],
        "pattern": "{float} {unit};[GL|DF|RT|KB|MSL|other]",
        "slot_uri": "MIXS:0000413"
      },
      "samp_transport_cond": {
        "is_a": "core field",
        "title": "sample transport conditions",
        "description": "Sample transport duration (in days or hrs) and temperature the sample was exposed to (e.g. 5.5 days; 20 \u00ac\u221eC)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "5 days;-20 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value;measurement value",
          "Preferred unit: days;degree Celsius",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{float} {unit};{float} {unit}",
        "slot_uri": "MIXS:0000410"
      },
      "org_count_qpcr_info": {
        "is_a": "core field",
        "title": "organism count qPCR information",
        "description": "If qpcr was used for the cell count, the target gene name, the primer sequence and the cycling conditions should also be provided. (Example: 16S rrna; FWD:ACGTAGCTATGACGT REV:GTGCTAGTCGAGTAC; initial denaturation:90C_5min; denaturation:90C_2min; annealing:52C_30 sec; elongation:72C_30 sec; 90 C for 1 min; final elongation:72C_5min; 30 cycles)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: gene name;FWD:forward primer sequence;REV:reverse primer sequence;initial denaturation:degrees_minutes;denaturation:degrees_minutes;annealing:degrees_minutes;elongation:degrees_minutes;final elongation:degrees_minutes; total cycles",
          "Preferred unit: number of cells per gram (or ml or cm^2)",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text};FWD:{dna};REV:{dna};initial denaturation:degrees_minutes;denaturation:degrees_minutes;annealing:degrees_minutes;elongation:degrees_minutes;final elongation:degrees_minutes; total cycles",
        "slot_uri": "MIXS:0000099"
      },
      "ph": {
        "is_a": "core field",
        "title": "pH",
        "description": "Ph measurement of the sample, or liquid portion of sample, or aqueous phase of the fluid",
        "range": "double",
        "multivalued": false,
        "examples": [
          {
            "value": "7.2"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used in: 8 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, soil, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0001001"
      },
      "alkalinity": {
        "is_a": "core field",
        "title": "alkalinity",
        "description": "Alkalinity, the ability of a solution to neutralize acids to the equivalence point of carbonate or bicarbonate",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "50 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milliequivalent per liter, milligram per liter",
          "Occurrence: 1",
          "This field is used in: 7 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000421"
      },
      "alkalinity_method": {
        "is_a": "core field",
        "title": "alkalinity method",
        "description": "Method used for alkalinity measurement",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "titration"
          }
        ],
        "comments": [
          "Expected value: description of method",
          "Occurrence: 1",
          "This field is used in: 3 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, water"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000298"
      },
      "sulfate": {
        "is_a": "core field",
        "title": "sulfate",
        "description": "Concentration of sulfate in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000423"
      },
      "sulfide": {
        "is_a": "core field",
        "title": "sulfide",
        "description": "Concentration of sulfide in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "2 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000424"
      },
      "tot_sulfur": {
        "is_a": "core field",
        "title": "total sulfur",
        "description": "Concentration of total sulfur in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000419"
      },
      "nitrate": {
        "is_a": "core field",
        "title": "nitrate",
        "description": "Concentration of nitrate in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "65 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 7 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000425"
      },
      "nitrite": {
        "is_a": "core field",
        "title": "nitrite",
        "description": "Concentration of nitrite in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.5 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000426"
      },
      "ammonium": {
        "is_a": "core field",
        "title": "ammonium",
        "description": "Concentration of ammonium in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1.5 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000427"
      },
      "tot_nitro": {
        "is_a": "core field",
        "title": "total nitrogen concentration",
        "description": "Total nitrogen concentration of water samples, calculated by: total nitrogen = total dissolved nitrogen + particulate nitrogen. Can also be measured without filtering, reported as nitrogen",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "50 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, micromole per liter, milligram per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000102"
      },
      "diss_iron": {
        "is_a": "core field",
        "title": "dissolved iron",
        "description": "Concentration of dissolved iron in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000139"
      },
      "sodium": {
        "is_a": "core field",
        "title": "sodium",
        "description": "Sodium concentration in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "10.5 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 7 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000428"
      },
      "chloride": {
        "is_a": "core field",
        "title": "chloride",
        "description": "Concentration of chloride in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5000 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000429"
      },
      "potassium": {
        "is_a": "core field",
        "title": "potassium",
        "description": "Concentration of potassium in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "463 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000430"
      },
      "magnesium": {
        "is_a": "core field",
        "title": "magnesium",
        "description": "Concentration of magnesium in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "52.8 micromole per kilogram"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: mole per liter, milligram per liter, parts per million, micromole per kilogram",
          "Occurrence: 1",
          "This field is used in: 5 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000431"
      },
      "calcium": {
        "is_a": "core field",
        "title": "calcium",
        "description": "Concentration of calcium in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.2 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, micromole per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000432"
      },
      "tot_iron": {
        "is_a": "core field",
        "title": "total iron",
        "description": "Concentration of total iron in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, milligram per kilogram",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000105"
      },
      "diss_org_carb": {
        "is_a": "core field",
        "title": "dissolved organic carbon",
        "description": "Concentration of dissolved organic carbon in the sample, liquid portion of the sample, or aqueous phase of the fluid",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "197 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter",
          "Occurrence: 1",
          "This field is used in: 5 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000433"
      },
      "diss_inorg_carb": {
        "is_a": "core field",
        "title": "dissolved inorganic carbon",
        "description": "Dissolved inorganic carbon concentration in the sample, typically measured after filtering the sample using a 0.45 micrometer filter",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "2059 micromole per kilogram"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000434"
      },
      "diss_inorg_phosp": {
        "is_a": "core field",
        "title": "dissolved inorganic phosphorus",
        "description": "Concentration of dissolved inorganic phosphorus in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "56.5 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 3 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, water"
        ],
        "slot_uri": "MIXS:0000106"
      },
      "tot_phosp": {
        "is_a": "core field",
        "title": "total phosphorus",
        "description": "Total phosphorus concentration in the sample, calculated by: total phosphorus = total dissolved phosphorus + particulate phosphorus",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.03 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 3 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, water"
        ],
        "slot_uri": "MIXS:0000117"
      },
      "suspend_solids": {
        "is_a": "core field",
        "title": "suspended solids",
        "description": "Concentration of substances including a wide variety of material, such as silt, decaying plant and animal matter; can include multiple substances",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: suspended solid name;measurement value",
          "Preferred unit: gram, microgram, milligram per liter, mole per liter, gram per liter, part per million",
          "Occurrence: m",
          "This field is used in: 3 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, wastewater_sludge"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000150"
      },
      "density": {
        "is_a": "core field",
        "title": "density",
        "description": "Density of the sample, which is its mass per unit volume (aka volumetric mass density)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1000 kilogram per cubic meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: gram per cubic meter, gram per cubic centimeter",
          "Occurrence: 1",
          "This field is used in: 5 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000435"
      },
      "diss_carb_dioxide": {
        "is_a": "core field",
        "title": "dissolved carbon dioxide",
        "description": "Concentration of dissolved carbon dioxide in the sample or liquid portion of the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter",
          "Occurrence: 1",
          "This field is used in: 6 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs, microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000436"
      },
      "diss_oxygen_fluid": {
        "is_a": "core field",
        "title": "dissolved oxygen in fluids",
        "description": "Concentration of dissolved oxygen in the oil field produced fluids as it contributes to oxgen-corrosion and microbial activity (e.g. Mic).",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per kilogram, milligram per liter",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000438"
      },
      "vfa": {
        "is_a": "core field",
        "title": "volatile fatty acids",
        "description": "Concentration of Volatile Fatty Acids in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000152"
      },
      "benzene": {
        "is_a": "core field",
        "title": "benzene",
        "description": "Concentration of benzene in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000153"
      },
      "toluene": {
        "is_a": "core field",
        "title": "toluene",
        "description": "Concentration of toluene in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000154"
      },
      "ethylbenzene": {
        "is_a": "core field",
        "title": "ethylbenzene",
        "description": "Concentration of ethylbenzene in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000155"
      },
      "xylene": {
        "is_a": "core field",
        "title": "xylene",
        "description": "Concentration of xylene in the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000156"
      },
      "api": {
        "is_a": "core field",
        "title": "API gravity",
        "description": "API gravity is a measure of how heavy or light a petroleum liquid is compared to water (source: https://en.wikipedia.org/wiki/API_gravity) (e.g. 31.1\u00ac\u221e API)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degrees API",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000157"
      },
      "tan": {
        "is_a": "core field",
        "title": "total acid number",
        "description": "Total Acid Number\u00ac\u2020(TAN) is a measurement of acidity that is determined by the amount of\u00ac\u2020potassium hydroxide\u00ac\u2020in milligrams that is needed to neutralize the acids in one gram of oil.\u00ac\u2020It is an important quality measurement of\u00ac\u2020crude oil. (source: https://en.wikipedia.org/wiki/Total_acid_number)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000120"
      },
      "viscosity": {
        "is_a": "core field",
        "title": "viscosity",
        "description": "A measure of oil's resistance\u00ac\u2020to gradual deformation by\u00ac\u2020shear stress\u00ac\u2020or\u00ac\u2020tensile stress (e.g. 3.5 cp; 100 \u00ac\u221eC)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value;measurement value",
          "Preferred unit: cP at degree Celsius",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{float} {unit};{float} {unit}",
        "slot_uri": "MIXS:0000126"
      },
      "pour_point": {
        "is_a": "core field",
        "title": "pour point",
        "description": "Temperature at which a liquid becomes semi solid and loses its flow characteristics. In crude oil a high\u00ac\u2020pour point\u00ac\u2020is generally associated with a high paraffin content, typically found in crude deriving from a larger proportion of plant material. (soure: https://en.wikipedia.org/wiki/pour_point)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000127"
      },
      "saturates_pc": {
        "is_a": "core field",
        "title": "saturates wt%",
        "description": "Saturate, Aromatic, Resin and Asphaltene\u00ac\u2020(SARA) is an analysis method that divides\u00ac\u2020crude oil\u00ac\u2020components according to their polarizability and polarity. There are three main methods to obtain SARA results. The most popular one is known as the Iatroscan TLC-FID and is referred to as IP-143 (source: https://en.wikipedia.org/wiki/Saturate,_aromatic,_resin_and_asphaltene)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name;measurement value",
          "Preferred unit: percent",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000131"
      },
      "aromatics_pc": {
        "is_a": "core field",
        "title": "aromatics wt%",
        "description": "Saturate, Aromatic, Resin and Asphaltene\u00ac\u2020(SARA) is an analysis method that divides\u00ac\u2020crude oil\u00ac\u2020components according to their polarizability and polarity. There are three main methods to obtain SARA results. The most popular one is known as the Iatroscan TLC-FID and is referred to as IP-143 (source: https://en.wikipedia.org/wiki/Saturate,_aromatic,_resin_and_asphaltene)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name;measurement value",
          "Preferred unit: percent",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000133"
      },
      "resins_pc": {
        "is_a": "core field",
        "title": "resins wt%",
        "description": "Saturate, Aromatic, Resin and Asphaltene\u00ac\u2020(SARA) is an analysis method that divides\u00ac\u2020crude oil\u00ac\u2020components according to their polarizability and polarity. There are three main methods to obtain SARA results. The most popular one is known as the Iatroscan TLC-FID and is referred to as IP-143 (source: https://en.wikipedia.org/wiki/Saturate,_aromatic,_resin_and_asphaltene)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name;measurement value",
          "Preferred unit: percent",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000134"
      },
      "asphaltenes_pc": {
        "is_a": "core field",
        "title": "asphaltenes wt%",
        "description": "Saturate, Aromatic, Resin and Asphaltene\u00ac\u2020(SARA) is an analysis method that divides\u00ac\u2020crude oil\u00ac\u2020components according to their polarizability and polarity. There are three main methods to obtain SARA results. The most popular one is known as the Iatroscan TLC-FID and is referred to as IP-143 (source: https://en.wikipedia.org/wiki/Saturate,_aromatic,_resin_and_asphaltene)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name;measurement value",
          "Preferred unit: percent",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000135"
      },
      "additional_info": {
        "is_a": "core field",
        "title": "additional info",
        "description": "Information that doesn't fit anywhere else. Can also be used to propose new entries for fields with controlled vocabulary",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: text",
          "Occurrence: 1",
          "This field is used in: 2 packages: hydrocarbon resources-cores, hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000300"
      },
      "prod_start_date": {
        "is_a": "core field",
        "title": "production start date",
        "description": "Date of field's first production",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0001008"
      },
      "prod_rate": {
        "is_a": "core field",
        "title": "production rate",
        "description": "Oil and/or gas production rates per well (e.g. 524 m3 / day)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: cubic meter per day",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000452"
      },
      "water_prod_rate": {
        "is_a": "core field",
        "title": "water production rate",
        "description": "Water production rates per well (e.g. 987 m3 / day)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: cubic meter per day",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000453"
      },
      "water_cut": {
        "is_a": "core field",
        "title": "water cut",
        "description": "Current amount of water (%) in a produced fluid stream; or the average of the combined streams",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: percent",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000454"
      },
      "iwf": {
        "is_a": "core field",
        "title": "injection water fraction",
        "description": "Proportion of the produced fluids derived from injected water at the time of sampling. (e.g. 87%)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: percent",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0000455"
      },
      "add_recov_method": {
        "is_a": "core field",
        "title": "secondary and tertiary recovery methods and start date",
        "description": "Additional (i.e. Secondary, tertiary, etc.) recovery methods deployed for increase of hydrocarbon recovery from resource and start date for each one of them. If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "add_recov_method_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Polymer Addition;2018-06-21T14:30Z"
          }
        ],
        "comments": [
          "Expected value: enumeration;timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[Water Injection|Dump Flood|Gas Injection|Wag Immiscible Injection|Polymer Addition|Surfactant Addition|Not Applicable|other];{timestamp}",
        "slot_uri": "MIXS:0001009"
      },
      "iw_bt_date_well": {
        "is_a": "core field",
        "title": "injection water breakthrough date of specific well",
        "description": "Injection water breakthrough date per well following a secondary and/or tertiary recovery",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": "2018-05-11"
          }
        ],
        "comments": [
          "Expected value: timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "slot_uri": "MIXS:0001010"
      },
      "biocide": {
        "is_a": "core field",
        "title": "biocide administration",
        "description": "List of biocides (commercial name of product and supplier) and date of administration",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "ALPHA 1427;Baker Hughes;2008-01-23"
          }
        ],
        "comments": [
          "Expected value: name;name;timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text};{text};{timestamp}",
        "slot_uri": "MIXS:0001011"
      },
      "biocide_admin_method": {
        "is_a": "core field",
        "title": "biocide administration method",
        "description": "Method of biocide administration (dose, frequency, duration, time elapsed between last biociding and sampling) (e.g. 150 mg/l; weekly; 4 hr; 3 days)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value;frequency;duration;duration",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{float} {unit};{Rn/start_time/end_time/duration};{duration}",
        "slot_uri": "MIXS:0000456"
      },
      "chem_treatment": {
        "is_a": "core field",
        "title": "chemical treatment",
        "description": "List of chemical compounds administered upstream the sampling location where sampling occurred (e.g. Glycols, H2S scavenger, corrosion and scale inhibitors, demulsifiers, and other production chemicals etc.). The commercial name of the product and name of the supplier should be provided. The date of administration should also be included",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "ACCENT 1125;DOW;2010-11-17"
          }
        ],
        "comments": [
          "Expected value: name;name;timestamp",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text};{text};{timestamp}",
        "slot_uri": "MIXS:0001012"
      },
      "chem_treat_method": {
        "is_a": "core field",
        "title": "chemical treatment method",
        "description": "Method of chemical administration(dose, frequency, duration, time elapsed between administration and sampling) (e.g. 50 mg/l; twice a week; 1 hr; 0 days)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value;frequency;duration;duration",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{float} {unit};{Rn/start_time/end_time/duration};{duration};{duration}",
        "slot_uri": "MIXS:0000457"
      },
      "samp_loc_corr_rate": {
        "is_a": "core field",
        "title": "corrosion rate at sample location",
        "description": "Metal corrosion rate is the speed of metal deterioration due to environmental conditions. As environmental conditions change corrosion rates change accordingly. Therefore, long term corrosion rates are generally more informative than short term rates and for that reason they are preferred during reporting. In the case of suspected MIC, corrosion rate measurements at the time of sampling might provide insights into the involvement of certain microbial community members in MIC as well as potential microbial interplays",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value range",
          "Preferred unit: millimeter per year",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{float} - {float} {unit}",
        "slot_uri": "MIXS:0000136"
      },
      "samp_collect_point": {
        "is_a": "core field",
        "title": "sample collection point",
        "description": "Sampling point on the asset were sample was collected (e.g. Wellhead, storage tank, separator, etc). If \"other\" is specified, please propose entry in \"additional info\" field",
        "range": "samp_collect_point_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "well"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "[well|test well|drilling rig|wellhead|separator|storage tank|other]",
        "slot_uri": "MIXS:0001015"
      },
      "samp_preserv": {
        "is_a": "core field",
        "title": "preservative added to sample",
        "description": "Preservative added to the sample (e.g. Rnalater, alcohol, formaldehyde, etc.). Where appropriate include volume added (e.g. Rnalater; 2 ml)",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: name;measurement value",
          "Preferred unit: milliliter",
          "Occurrence: 1",
          "This field is used uniquely in: hydrocarbon resources-fluids_swabs"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000463"
      },
      "alkyl_diethers": {
        "is_a": "core field",
        "title": "alkyl diethers",
        "description": "Concentration of alkyl diethers",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.005 mole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: mole per liter",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000490"
      },
      "aminopept_act": {
        "is_a": "core field",
        "title": "aminopeptidase activity",
        "description": "Measurement of aminopeptidase activity",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.269 mole per liter per hour"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: mole per liter per hour",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000172"
      },
      "bacteria_carb_prod": {
        "is_a": "core field",
        "title": "bacterial carbon production",
        "description": "Measurement of bacterial carbon production",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "2.53 microgram per liter per hour"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: nanogram per hour",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000173"
      },
      "biomass": {
        "is_a": "core field",
        "title": "biomass",
        "description": "Amount of biomass; should include the name for the part of biomass measured, e.g. Microbial, total. Can include multiple measurements",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "total;20 gram"
          }
        ],
        "comments": [
          "Expected value: biomass type;measurement value",
          "Preferred unit: ton, kilogram, gram",
          "Occurrence: m",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000174"
      },
      "bishomohopanol": {
        "is_a": "core field",
        "title": "bishomohopanol",
        "description": "Concentration of bishomohopanol",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "14 microgram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, microgram per gram",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000175"
      },
      "bromide": {
        "is_a": "core field",
        "title": "bromide",
        "description": "Concentration of bromide",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.05 parts per million"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: parts per million",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000176"
      },
      "carb_nitro_ratio": {
        "is_a": "core field",
        "title": "carbon/nitrogen ratio",
        "description": "Ratio of amount or concentrations of carbon to nitrogen",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.417361111"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000310"
      },
      "chlorophyll": {
        "is_a": "core field",
        "title": "chlorophyll",
        "description": "Concentration of chlorophyll",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5 milligram per cubic meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per cubic meter, microgram per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000177"
      },
      "diether_lipids": {
        "is_a": "core field",
        "title": "diether lipids",
        "description": "Concentration of diether lipids; can include multiple types of diether lipids",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "0.2 nanogram per liter"
          }
        ],
        "comments": [
          "Expected value: diether lipid name;measurement value",
          "Preferred unit: nanogram per liter",
          "Occurrence: m",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000178"
      },
      "diss_hydrogen": {
        "is_a": "core field",
        "title": "dissolved hydrogen",
        "description": "Concentration of dissolved hydrogen",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.3 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000179"
      },
      "diss_org_nitro": {
        "is_a": "core field",
        "title": "dissolved organic nitrogen",
        "description": "Dissolved organic nitrogen concentration measured as; total dissolved nitrogen - NH4 - NO3 - NO2",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.05 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, milligram per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000162"
      },
      "diss_oxygen": {
        "is_a": "core field",
        "title": "dissolved oxygen",
        "description": "Concentration of dissolved oxygen",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "175 micromole per kilogram"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per kilogram, milligram per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000119"
      },
      "glucosidase_act": {
        "is_a": "core field",
        "title": "glucosidase activity",
        "description": "Measurement of glucosidase activity",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5 mol per liter per hour"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: mol per liter per hour",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000137"
      },
      "mean_frict_vel": {
        "is_a": "core field",
        "title": "mean friction velocity",
        "description": "Measurement of mean friction velocity",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.5 meter per second"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter per second",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000498"
      },
      "mean_peak_frict_vel": {
        "is_a": "core field",
        "title": "mean peak friction velocity",
        "description": "Measurement of mean peak friction velocity",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1 meter per second"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter per second",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000502"
      },
      "n_alkanes": {
        "is_a": "core field",
        "title": "n-alkanes",
        "description": "Concentration of n-alkanes; can include multiple n-alkanes",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "n-hexadecane;100 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: n-alkane name;measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: m",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000503"
      },
      "nitro": {
        "is_a": "core field",
        "title": "nitrogen",
        "description": "Concentration of nitrogen (total)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "4.2 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000504"
      },
      "org_carb": {
        "is_a": "core field",
        "title": "organic carbon",
        "description": "Concentration of organic carbon",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1.5 microgram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000508"
      },
      "org_matter": {
        "is_a": "core field",
        "title": "organic matter",
        "description": "Concentration of organic matter",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1.75 milligram per cubic meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000204"
      },
      "org_nitro": {
        "is_a": "core field",
        "title": "organic nitrogen",
        "description": "Concentration of organic nitrogen",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "4 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000205"
      },
      "part_org_carb": {
        "is_a": "core field",
        "title": "particulate organic carbon",
        "description": "Concentration of particulate organic carbon",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1.92 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000515"
      },
      "petroleum_hydrocarb": {
        "is_a": "core field",
        "title": "petroleum hydrocarbon",
        "description": "Concentration of petroleum hydrocarbon",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.05 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000516"
      },
      "phaeopigments": {
        "is_a": "core field",
        "title": "phaeopigments",
        "description": "Concentration of phaeopigments; can include multiple phaeopigments",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "2.5 milligram per cubic meter"
          }
        ],
        "comments": [
          "Expected value: phaeopigment name;measurement value",
          "Preferred unit: milligram per cubic meter",
          "Occurrence: m",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000180"
      },
      "phosphate": {
        "is_a": "core field",
        "title": "phosphate",
        "description": "Concentration of phosphate",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.7 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: 1",
          "This field is used in: 5 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, wastewater_sludge, water"
        ],
        "slot_uri": "MIXS:0000505"
      },
      "phosplipid_fatt_acid": {
        "is_a": "core field",
        "title": "phospholipid fatty acid",
        "description": "Concentration of phospholipid fatty acids; can include multiple values",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "2.98 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: phospholipid fatty acid name;measurement value",
          "Preferred unit: mole per gram, mole per liter",
          "Occurrence: m",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000181"
      },
      "redox_potential": {
        "is_a": "core field",
        "title": "redox potential",
        "description": "Redox potential, measured relative to a hydrogen cell, indicating oxidation or reduction potential",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "300 millivolt"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millivolt",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000182"
      },
      "silicate": {
        "is_a": "core field",
        "title": "silicate",
        "description": "Concentration of silicate",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.05 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: 1",
          "This field is used in: 4 packages: microbial mat_biofilm, miscellaneous natural or artificial environment, sediment, water"
        ],
        "slot_uri": "MIXS:0000184"
      },
      "tot_carb": {
        "is_a": "core field",
        "title": "total carbon",
        "description": "Total carbon content",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter",
          "Occurrence: 1",
          "This field is used in: 2 packages: microbial mat_biofilm, sediment"
        ],
        "slot_uri": "MIXS:0000525"
      },
      "tot_nitro_content": {
        "is_a": "core field",
        "title": "total nitrogen content",
        "description": "Total nitrogen content of the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, micromole per liter, milligram per liter",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, soil"
        ],
        "slot_uri": "MIXS:0000530"
      },
      "tot_org_carb": {
        "is_a": "core field",
        "title": "total organic carbon",
        "description": "Definition for soil: total organic carbon content of the soil, definition otherwise: total organic carbon content",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: gram Carbon per kilogram sample material",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, soil"
        ],
        "slot_uri": "MIXS:0000533"
      },
      "turbidity": {
        "is_a": "core field",
        "title": "turbidity",
        "description": "Measure of the amount of cloudiness or haziness in water caused by individual particles",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.3 nephelometric turbidity units"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: formazin turbidity unit, formazin nephelometric units",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, water"
        ],
        "slot_uri": "MIXS:0000191"
      },
      "water_content": {
        "is_a": "core field",
        "title": "water content",
        "description": "Water content measurement",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: gram per gram or cubic centimeter per cubic centimeter",
          "Occurrence: 1",
          "This field is used in: 3 packages: microbial mat_biofilm, sediment, soil"
        ],
        "slot_uri": "MIXS:0000185"
      },
      "water_current": {
        "is_a": "core field",
        "title": "water current",
        "description": "Measurement of magnitude and direction of flow within a fluid",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "10 cubic meter per second"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: cubic meter per second, knots",
          "Occurrence: 1",
          "This field is used in: 2 packages: miscellaneous natural or artificial environment, water"
        ],
        "slot_uri": "MIXS:0000203"
      },
      "air_temp_regm": {
        "is_a": "core field",
        "title": "air temperature regimen",
        "description": "Information about treatment involving an exposure to varying temperatures; should include the temperature, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include different temperature regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "25 degree Celsius;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: temperature value;treatment interval and duration",
          "Preferred unit: meter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000551"
      },
      "antibiotic_regm": {
        "is_a": "core field",
        "title": "antibiotic regimen",
        "description": "Information about treatment involving antibiotic administration; should include the name of antibiotic, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple antibiotic regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "penicillin;5 milligram;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: antibiotic name;antibiotic amount;treatment interval and duration",
          "Preferred unit: milligram",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000553"
      },
      "biotic_regm": {
        "is_a": "core field",
        "title": "biotic regimen",
        "description": "Information about treatment(s) involving use of biotic factors, such as bacteria, viruses or fungi.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "sample inoculated with Rhizobium spp. Culture"
          }
        ],
        "comments": [
          "Expected value: free text",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0001038"
      },
      "chem_mutagen": {
        "is_a": "core field",
        "title": "chemical mutagen",
        "description": "Treatment involving use of mutagens; should include the name of mutagen, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple mutagen regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "nitrous acid;0.5 milligram per liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: mutagen name;mutagen amount;treatment interval and duration",
          "Preferred unit: milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000555"
      },
      "climate_environment": {
        "is_a": "core field",
        "title": "climate environment",
        "description": "Treatment involving an exposure to a particular climate; treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple climates",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "tropical climate;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: climate name;treatment interval and duration",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0001040"
      },
      "cult_root_med": {
        "is_a": "core field",
        "title": "culture rooting medium",
        "description": "Name or reference for the hydroponic or in vitro culture rooting medium; can be the name of a commonly used medium or reference to a specific medium, e.g. Murashige and Skoog medium. If the medium has not been formally published, use the rooting medium descriptors.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "http://himedialabs.com/TD/PT158.pdf"
          }
        ],
        "comments": [
          "Expected value: name, PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text}|{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0001041"
      },
      "fertilizer_regm": {
        "is_a": "core field",
        "title": "fertilizer regimen",
        "description": "Information about treatment involving the use of fertilizers; should include the name of fertilizer, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple fertilizer regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "urea;0.6 milligram per liter;R2/2018-05-11:T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: fertilizer name;fertilizer amount;treatment interval and duration",
          "Preferred unit: gram, mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000556"
      },
      "fungicide_regm": {
        "is_a": "core field",
        "title": "fungicide regimen",
        "description": "Information about treatment involving use of fungicides; should include the name of fungicide, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple fungicide regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "bifonazole;1 mole per liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: fungicide name;fungicide amount;treatment interval and duration",
          "Preferred unit: gram, mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000557"
      },
      "gaseous_environment": {
        "is_a": "core field",
        "title": "gaseous environment",
        "description": "Use of conditions with differing gaseous environments; should include the name of gaseous compound, amount administered, treatment duration, interval and total experimental duration; can include multiple gaseous environment regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "nitric oxide;0.5 micromole per liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: gaseous compound name;gaseous compound amount;treatment interval and duration",
          "Preferred unit: micromole per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000558"
      },
      "gravity": {
        "is_a": "core field",
        "title": "gravity",
        "description": "Information about treatment involving use of gravity factor to study various types of responses in presence, absence or modified levels of gravity; treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple treatments",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "12 g;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: gravity factor value;treatment interval and duration",
          "Preferred unit: meter per square second, g",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000559"
      },
      "growth_facil": {
        "is_a": "core field",
        "title": "growth facility",
        "description": "Type of facility where the sampled plant was grown; controlled vocabulary: growth chamber, open top chamber, glasshouse, experimental garden, field. Alternatively use Crop Ontology (CO) terms, see http://www.cropontology.org/ontology/CO_715/Crop%20Research",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "Growth chamber [CO_715:0000189]"
          }
        ],
        "comments": [
          "Expected value: free text or CO",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text}|{termLabel} {[termID]}",
        "slot_uri": "MIXS:0001043"
      },
      "growth_habit": {
        "is_a": "core field",
        "title": "growth habit",
        "description": "Characteristic shape, appearance or growth form of a plant species",
        "range": "growth_habit_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "spreading"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "[erect|semi-erect|spreading|prostrate]",
        "slot_uri": "MIXS:0001044"
      },
      "growth_hormone_regm": {
        "is_a": "core field",
        "title": "growth hormone regimen",
        "description": "Information about treatment involving use of growth hormones; should include the name of growth hormone, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple growth hormone regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "abscisic acid;0.5 milligram per liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: growth hormone name;growth hormone amount;treatment interval and duration",
          "Preferred unit: gram, mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000560"
      },
      "herbicide_regm": {
        "is_a": "core field",
        "title": "herbicide regimen",
        "description": "Information about treatment involving use of herbicides; information about treatment involving use of growth hormones; should include the name of herbicide, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "atrazine;10 milligram per liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: herbicide name;herbicide amount;treatment interval and duration",
          "Preferred unit: gram, mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000561"
      },
      "host_wet_mass": {
        "is_a": "core field",
        "title": "host wet mass",
        "description": "Measurement of wet mass",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "1500 gram"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: kilogram, gram",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "slot_uri": "MIXS:0000567"
      },
      "humidity_regm": {
        "is_a": "core field",
        "title": "humidity regimen",
        "description": "Information about treatment involving an exposure to varying degree of humidity; information about treatment involving use of growth hormones; should include amount of humidity administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "25 gram per cubic meter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: humidity value;treatment interval and duration",
          "Preferred unit: gram per cubic meter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000568"
      },
      "light_regm": {
        "is_a": "core field",
        "title": "light regimen",
        "description": "Information about treatment(s) involving exposure to light, including both light intensity and quality.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "incandescant light;10 lux;450 nanometer"
          }
        ],
        "comments": [
          "Expected value: exposure type;light intensity;light quality",
          "Preferred unit: lux; micrometer, nanometer, angstrom",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{float} {unit}",
        "slot_uri": "MIXS:0000569"
      },
      "mechanical_damage": {
        "is_a": "core field",
        "title": "mechanical damage",
        "description": "Information about any mechanical damage exerted on the plant; can include multiple damages and sites",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "pruning;bark"
          }
        ],
        "comments": [
          "Expected value: damage type;body site",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{text}",
        "slot_uri": "MIXS:0001052"
      },
      "mineral_nutr_regm": {
        "is_a": "core field",
        "title": "mineral nutrient regimen",
        "description": "Information about treatment involving the use of mineral supplements; should include the name of mineral nutrient, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple mineral nutrient regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "potassium;15 gram;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: mineral nutrient name;mineral nutrient amount;treatment interval and duration",
          "Preferred unit: gram, mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000570"
      },
      "non_min_nutr_regm": {
        "is_a": "core field",
        "title": "non-mineral nutrient regimen",
        "description": "Information about treatment involving the exposure of plant to non-mineral nutrient such as oxygen, hydrogen or carbon; should include the name of non-mineral nutrient, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple non-mineral nutrient regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "carbon dioxide;10 mole per liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: non-mineral nutrient name;non-mineral nutrient amount;treatment interval and duration",
          "Preferred unit: gram, mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000571"
      },
      "ph_regm": {
        "is_a": "core field",
        "title": "pH regimen",
        "description": "Information about treatment involving exposure of plants to varying levels of ph of the growth media, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple regimen",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "7.6;R2/2018-05-11:T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: measurement value;treatment interval and duration",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{float};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0001056"
      },
      "pesticide_regm": {
        "is_a": "core field",
        "title": "pesticide regimen",
        "description": "Information about treatment involving use of insecticides; should include the name of pesticide, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple pesticide regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "pyrethrum;0.6 milligram per liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: pesticide name;pesticide amount;treatment interval and duration",
          "Preferred unit: gram, mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000573"
      },
      "plant_growth_med": {
        "is_a": "core field",
        "title": "plant growth medium",
        "description": "Specification of the media for growing the plants or tissue cultured samples, e.g. soil, aeroponic, hydroponic, in vitro solid culture medium, in vitro liquid culture medium. Recommended value is a specific value from EO:plant growth medium (follow this link for terms http://purl.obolibrary.org/obo/EO_0007147) or other controlled vocabulary",
        "range": "plant_growth_med_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "hydroponic plant culture media [EO:0007067]"
          }
        ],
        "comments": [
          "Expected value: EO or enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{termLabel} {[termID]} or [husk|other artificial liquid medium|other artificial solid medium|peat moss|perlite|pumice|sand|soil|vermiculite|water]",
        "slot_uri": "MIXS:0001057"
      },
      "plant_product": {
        "is_a": "core field",
        "title": "plant product",
        "description": "Substance produced by the plant, where the sample was obtained from",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "xylem sap [PO:0025539]"
          }
        ],
        "comments": [
          "Expected value: product name",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0001058"
      },
      "plant_sex": {
        "is_a": "core field",
        "title": "plant sex",
        "description": "Sex of the reproductive parts on the whole plant, e.g. pistillate, staminate, monoecieous, hermaphrodite.",
        "range": "plant_sex_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Hermaphroditic"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "[Androdioecious|Androecious|Androgynous|Androgynomonoecious|Andromonoecious|Bisexual|Dichogamous|Diclinous|Dioecious|Gynodioecious|Gynoecious|Gynomonoecious|Hermaphroditic|Imperfect|Monoclinous|Monoecious|Perfect|Polygamodioecious|Polygamomonoecious|Polygamous|Protandrous|Protogynous|Subandroecious|Subdioecious|Subgynoecious|Synoecious|Trimonoecious|Trioecious|Unisexual]",
        "slot_uri": "MIXS:0001059"
      },
      "plant_struc": {
        "is_a": "core field",
        "title": "plant structure",
        "description": "Name of plant structure the sample was obtained from; for Plant Ontology (PO) (v releases/2017-12-14) terms, see http://purl.bioontology.org/ontology/PO, e.g. petiole epidermis (PO_0000051). If an individual flower is sampled, the sex of it can be recorded here.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "epidermis [PO:0005679]"
          }
        ],
        "comments": [
          "Expected value: PO",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0001060"
      },
      "radiation_regm": {
        "is_a": "core field",
        "title": "radiation regimen",
        "description": "Information about treatment involving exposure of plant or a plant part to a particular radiation regimen; should include the radiation type, amount or intensity administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple radiation regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "gamma radiation;60 gray;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: radiation type name;radiation amount;treatment interval and duration",
          "Preferred unit: rad, gray",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000575"
      },
      "rainfall_regm": {
        "is_a": "core field",
        "title": "rainfall regimen",
        "description": "Information about treatment involving an exposure to a given amount of rainfall, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "15 millimeter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: measurement value;treatment interval and duration",
          "Preferred unit: millimeter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000576"
      },
      "root_cond": {
        "is_a": "core field",
        "title": "rooting conditions",
        "description": "Relevant rooting conditions such as field plot size, sowing density, container dimensions, number of plants per container.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "http://himedialabs.com/TD/PT158.pdf"
          }
        ],
        "comments": [
          "Expected value: PMID,DOI,url or free text",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{PMID}|{DOI}|{URL}|{text}",
        "slot_uri": "MIXS:0001061"
      },
      "root_med_carbon": {
        "is_a": "core field",
        "title": "rooting medium carbon",
        "description": "Source of organic carbon in the culture rooting medium; e.g. sucrose.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "sucrose"
          }
        ],
        "comments": [
          "Expected value: carbon source name;measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000577"
      },
      "root_med_macronutr": {
        "is_a": "core field",
        "title": "rooting medium macronutrients",
        "description": "Measurement of the culture rooting medium macronutrients (N,P, K, Ca, Mg, S); e.g. KH2PO4 (170\u00ac\u2020mg/L).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "KH2PO4;170\u00ac\u2020milligram per liter"
          }
        ],
        "comments": [
          "Expected value: macronutrient name;measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000578"
      },
      "root_med_micronutr": {
        "is_a": "core field",
        "title": "rooting medium micronutrients",
        "description": "Measurement of the culture rooting medium micronutrients (Fe, Mn, Zn, B, Cu, Mo); e.g. H3BO3 (6.2\u00ac\u2020mg/L).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "H3BO3;6.2\u00ac\u2020milligram per liter"
          }
        ],
        "comments": [
          "Expected value: micronutrient name;measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000579"
      },
      "root_med_suppl": {
        "is_a": "core field",
        "title": "rooting medium organic supplements",
        "description": "Organic supplements of the culture rooting medium, such as vitamins, amino acids, organic acids, antibiotics activated charcoal; e.g. nicotinic acid (0.5\u00ac\u2020mg/L).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "nicotinic acid;0.5 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: supplement name;measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000580"
      },
      "root_med_ph": {
        "is_a": "core field",
        "title": "rooting medium pH",
        "description": "pH measurement of the culture rooting medium; e.g. 5.5.",
        "range": "double",
        "multivalued": false,
        "examples": [
          {
            "value": "7.5"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "slot_uri": "MIXS:0001062"
      },
      "root_med_regl": {
        "is_a": "core field",
        "title": "rooting medium regulators",
        "description": "Growth regulators in the culture rooting medium such as cytokinins, auxins, gybberellins, abscisic acid; e.g. 0.5\u00ac\u2020mg/L NAA.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "abscisic acid;0.75 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: regulator name;measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000581"
      },
      "root_med_solid": {
        "is_a": "core field",
        "title": "rooting medium solidifier",
        "description": "Specification of the solidifying agent in the culture rooting medium; e.g. agar.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "agar"
          }
        ],
        "comments": [
          "Expected value: name",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0001063"
      },
      "salt_regm": {
        "is_a": "core field",
        "title": "salt regimen",
        "description": "Information about treatment involving use of salts as supplement to liquid and soil growth media; should include the name of salt, amount administered, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple salt regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "NaCl;5 gram per liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: salt name;salt amount;treatment interval and duration",
          "Preferred unit: gram, microgram, mole per liter, gram per liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000582"
      },
      "season_environment": {
        "is_a": "core field",
        "title": "seasonal environment",
        "description": "Treatment involving an exposure to a particular season (e.g. Winter, summer, rabi, rainy etc.), treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "rainy;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: seasonal environment name;treatment interval and duration",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0001068"
      },
      "standing_water_regm": {
        "is_a": "core field",
        "title": "standing water regimen",
        "description": "Treatment involving an exposure to standing water during a plant's life span, types can be flood water or standing water, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "standing water;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: standing water type;treatment interval and duration",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{text};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0001069"
      },
      "tiss_cult_growth_med": {
        "is_a": "core field",
        "title": "tissue culture growth media",
        "description": "Description of plant tissue culture growth media used",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "https://link.springer.com/content/pdf/10.1007/BF02796489.pdf"
          }
        ],
        "comments": [
          "Expected value: PMID,DOI,url or free text",
          "Occurrence: 1",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{PMID}|{DOI}|{URL}|{text}",
        "slot_uri": "MIXS:0001070"
      },
      "water_temp_regm": {
        "is_a": "core field",
        "title": "water temperature regimen",
        "description": "Information about treatment involving an exposure to water with varying degree of temperature, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "15 degree Celsius;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: measurement value;treatment interval and duration",
          "Preferred unit: degree Celsius",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000590"
      },
      "watering_regm": {
        "is_a": "core field",
        "title": "watering regimen",
        "description": "Information about treatment involving an exposure to watering frequencies, treatment regimen including how many times the treatment was repeated, how long each treatment lasted, and the start and end time of the entire treatment; can include multiple regimens",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "1 liter;R2/2018-05-11T14:30/2018-05-11T19:30/P1H30M"
          }
        ],
        "comments": [
          "Expected value: measurement value;treatment interval and duration",
          "Preferred unit: milliliter, liter",
          "Occurrence: m",
          "This field is used uniquely in: plant-associated"
        ],
        "pattern": "{float} {unit};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000591"
      },
      "particle_class": {
        "is_a": "core field",
        "title": "particle classification",
        "description": "Particles are classified, based on their size, into six general categories:clay, silt, sand, gravel, cobbles, and boulders; should include amount of particle preceded by the name of the particle type; can include multiple values",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: particle name;measurement value",
          "Preferred unit: micrometer",
          "Occurrence: m",
          "This field is used uniquely in: sediment"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000206"
      },
      "sediment_type": {
        "is_a": "core field",
        "title": "sediment type",
        "description": "Information about the sediment type based on major constituents",
        "range": "sediment_type_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "biogenous"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: sediment"
        ],
        "pattern": "[biogenous|cosmogenous|hydrogenous|lithogenous]",
        "slot_uri": "MIXS:0001078"
      },
      "tidal_stage": {
        "is_a": "core field",
        "title": "tidal stage",
        "description": "Stage of tide",
        "range": "tidal_stage_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "high tide"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used in: 2 packages: sediment, water"
        ],
        "pattern": "[low tide|ebb tide|flood tide|high tide]",
        "slot_uri": "MIXS:0000750"
      },
      "tot_depth_water_col": {
        "is_a": "core field",
        "title": "total depth of water column",
        "description": "Measurement of total depth of water column",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "500 meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: meter",
          "Occurrence: 1",
          "This field is used in: 2 packages: sediment, water"
        ],
        "slot_uri": "MIXS:0000634"
      },
      "cur_land_use": {
        "is_a": "core field",
        "title": "current land use",
        "description": "Present state of sample site",
        "range": "cur_land_use_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "conifers"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "[cities|farmstead|industrial areas|roads/railroads|rock|sand|gravel|mudflats|salt flats|badlands|permanent snow or ice|saline seeps|mines/quarries|oil waste areas|small grains|row crops|vegetable crops|horticultural plants (e.g. tulips)|marshlands (grass,sedges,rushes)|tundra (mosses,lichens)|rangeland|pastureland (grasslands used for livestock grazing)|hayland|meadows (grasses,alfalfa,fescue,bromegrass,timothy)|shrub land (e.g. mesquite,sage-brush,creosote bush,shrub oak,eucalyptus)|successional shrub land (tree saplings,hazels,sumacs,chokecherry,shrub dogwoods,blackberries)|shrub crops (blueberries,nursery ornamentals,filberts)|vine crops (grapes)|conifers (e.g. pine,spruce,fir,cypress)|hardwoods (e.g. oak,hickory,elm,aspen)|intermixed hardwood and conifers|tropical (e.g. mangrove,palms)|rainforest (evergreen forest receiving >406 cm annual rainfall)|swamp (permanent or semi-permanent water body dominated by woody plants)|crop trees (nuts,fruit,christmas trees,nursery trees)]",
        "slot_uri": "MIXS:0001080"
      },
      "cur_vegetation": {
        "is_a": "core field",
        "title": "current vegetation",
        "description": "Vegetation classification from one or more standard classification systems, or agricultural crop",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: current vegetation type",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000312"
      },
      "cur_vegetation_meth": {
        "is_a": "core field",
        "title": "current vegetation method",
        "description": "Reference or method used in vegetation classification",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000314"
      },
      "previous_land_use": {
        "is_a": "core field",
        "title": "history/previous land use",
        "description": "Previous land use and dates",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: land use name;date",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{text};{timestamp}",
        "slot_uri": "MIXS:0000315"
      },
      "prev_land_use_meth": {
        "is_a": "core field",
        "title": "history/previous land use method",
        "description": "Reference or method used in determining previous land use and dates",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000316"
      },
      "crop_rotation": {
        "is_a": "core field",
        "title": "history/crop rotation",
        "description": "Whether or not crop is rotated, and if yes, rotation schedule",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes;R2/2017-01-01/2018-12-31/P6M"
          }
        ],
        "comments": [
          "Expected value: crop rotation status;schedule",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{boolean};{Rn/start_time/end_time/duration}",
        "slot_uri": "MIXS:0000318"
      },
      "agrochem_addition": {
        "is_a": "core field",
        "title": "history/agrochemical additions",
        "description": "Addition of fertilizers, pesticides, etc. - amount and time of applications",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "roundup;5 milligram per liter;2018-06-21"
          }
        ],
        "comments": [
          "Expected value: agrochemical name;agrochemical amount;timestamp",
          "Preferred unit: gram, mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{text};{float} {unit};{timestamp}",
        "slot_uri": "MIXS:0000639"
      },
      "tillage": {
        "is_a": "core field",
        "title": "history/tillage",
        "description": "Note method(s) used for tilling",
        "range": "tillage_enum",
        "multivalued": true,
        "examples": [
          {
            "value": "chisel"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: m",
          "This field is used uniquely in: soil"
        ],
        "pattern": "[drill|cutting disc|ridge till|strip tillage|zonal tillage|chisel|tined|mouldboard|disc plough]",
        "slot_uri": "MIXS:0001081"
      },
      "fire": {
        "is_a": "core field",
        "title": "history/fire",
        "description": "Historical and/or physical evidence of fire",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: date",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0001086"
      },
      "flooding": {
        "is_a": "core field",
        "title": "history/flooding",
        "description": "Historical and/or physical evidence of flooding",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: date",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000319"
      },
      "extreme_event": {
        "is_a": "core field",
        "title": "history/extreme events",
        "description": "Unusual physical events that may have affected microbial populations",
        "range": "date",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: date",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000320"
      },
      "soil_horizon": {
        "is_a": "core field",
        "title": "soil horizon",
        "description": "Specific layer in the land area which measures parallel to the soil surface and possesses physical characteristics which differ from the layers above and beneath",
        "range": "soil_horizon_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "A horizon"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "[O horizon|A horizon|E horizon|B horizon|C horizon|R layer|Permafrost]",
        "slot_uri": "MIXS:0001082"
      },
      "horizon_meth": {
        "is_a": "core field",
        "title": "horizon method",
        "description": "Reference or method used in determining the horizon",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000321"
      },
      "sieving": {
        "is_a": "core field",
        "title": "composite design/sieving",
        "description": "Collection design of pooled samples and/or sieve size and amount of sample sieved",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: design name and/or size;amount",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{{text}|{float} {unit}};{float} {unit}",
        "slot_uri": "MIXS:0000322"
      },
      "water_cont_soil_meth": {
        "is_a": "core field",
        "title": "water content method",
        "description": "Reference or method used in determining the water content of soil",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000323"
      },
      "pool_dna_extracts": {
        "is_a": "core field",
        "title": "pooling of DNA extracts (if done)",
        "description": "Indicate whether multiple DNA extractions were mixed. If the answer yes, the number of extracts that were pooled should be given",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "yes;5"
          }
        ],
        "comments": [
          "Expected value: pooling status;number of pooled extracts",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{boolean};{integer}",
        "slot_uri": "MIXS:0000325"
      },
      "store_cond": {
        "is_a": "core field",
        "title": "storage conditions",
        "description": "Explain how and for how long the soil sample was stored before DNA extraction (fresh/frozen/other).",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "-20 degree Celsius freezer;P2Y10D"
          }
        ],
        "comments": [
          "Expected value: storage condition type;duration",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{text};{duration}",
        "slot_uri": "MIXS:0000327"
      },
      "link_climate_info": {
        "is_a": "core field",
        "title": "link to climate information",
        "description": "Link to climate resource",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000328"
      },
      "annual_temp": {
        "is_a": "core field",
        "title": "mean annual temperature",
        "description": "Mean annual temperature",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "12.5 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000642"
      },
      "season_temp": {
        "is_a": "core field",
        "title": "mean seasonal temperature",
        "description": "Mean seasonal temperature",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "18 degree Celsius"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree Celsius",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000643"
      },
      "annual_precpt": {
        "is_a": "core field",
        "title": "mean annual precipitation",
        "description": "The average of all annual precipitation values known, or an estimated equivalent value derived by such methods as regional indexes or Isohyetal maps.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millimeter",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000644"
      },
      "season_precpt": {
        "is_a": "core field",
        "title": "mean seasonal precipitation",
        "description": "The average of all seasonal precipitation values known, or an estimated equivalent value derived by such methods as regional indexes or Isohyetal maps.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millimeter",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000645"
      },
      "link_class_info": {
        "is_a": "core field",
        "title": "link to classification information",
        "description": "Link to digitized soil maps or other soil classification information",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000329"
      },
      "fao_class": {
        "is_a": "core field",
        "title": "soil_taxonomic/FAO classification",
        "description": "Soil classification from the FAO World Reference Database for Soil Resources. The list can be found at http://www.fao.org/nr/land/sols/soil/wrb-soil-maps/reference-groups",
        "range": "fao_class_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "Luvisols"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "[Acrisols|Andosols|Arenosols|Cambisols|Chernozems|Ferralsols|Fluvisols|Gleysols|Greyzems|Gypsisols|Histosols|Kastanozems|Lithosols|Luvisols|Nitosols|Phaeozems|Planosols|Podzols|Podzoluvisols|Rankers|Regosols|Rendzinas|Solonchaks|Solonetz|Vertisols|Yermosols]",
        "slot_uri": "MIXS:0001083"
      },
      "local_class": {
        "is_a": "core field",
        "title": "soil_taxonomic/local classification",
        "description": "Soil classification based on local soil classification system",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: local classification name",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000330"
      },
      "local_class_meth": {
        "is_a": "core field",
        "title": "soil_taxonomic/local classification method",
        "description": "Reference or method used in determining the local soil classification",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000331"
      },
      "soil_type": {
        "is_a": "core field",
        "title": "soil type",
        "description": "Description of the soil type or classification. This field accepts terms under soil (http://purl.obolibrary.org/obo/ENVO_00001998).  Multiple terms can be separated by pipes.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": "plinthosol [ENVO:00002250]"
          }
        ],
        "comments": [
          "Expected value: ENVO_00001998",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{termLabel} {[termID]}",
        "slot_uri": "MIXS:0000332"
      },
      "soil_type_meth": {
        "is_a": "core field",
        "title": "soil type method",
        "description": "Reference or method used in determining soil series name or other lower-level classification",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000334"
      },
      "slope_gradient": {
        "is_a": "core field",
        "title": "slope gradient",
        "description": "Commonly called 'slope'. The angle between ground surface and a horizontal line (in percent). This is the direction that overland water would flow. This measure is usually taken with a hand level meter or clinometer",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: percentage",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000646"
      },
      "slope_aspect": {
        "is_a": "core field",
        "title": "slope aspect",
        "description": "The direction a slope faces. While looking down a slope use a compass to record the direction you are facing (direction or degrees); e.g., nw or 315 degrees. This measure provides an indication of sun and wind exposure that will influence soil temperature and evapotranspiration.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: degree",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000647"
      },
      "profile_position": {
        "is_a": "core field",
        "title": "profile position",
        "description": "Cross-sectional position in the hillslope where sample was collected.sample area position in relation to surrounding areas",
        "range": "profile_position_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "summit"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "[summit|shoulder|backslope|footslope|toeslope]",
        "slot_uri": "MIXS:0001084"
      },
      "drainage_class": {
        "is_a": "core field",
        "title": "drainage classification",
        "description": "Drainage classification from a standard system such as the USDA system",
        "range": "drainage_class_enum",
        "multivalued": false,
        "examples": [
          {
            "value": "well"
          }
        ],
        "comments": [
          "Expected value: enumeration",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "[very poorly|poorly|somewhat poorly|moderately well|well|excessively drained]",
        "slot_uri": "MIXS:0001085"
      },
      "soil_text_measure": {
        "is_a": "core field",
        "title": "soil texture measurement",
        "description": "The relative proportion of different grain sizes of mineral particles in a soil, as described using a standard system; express as % sand (50 um to 2 mm), silt (2 um to 50 um), and clay (<2 um) with textural name (e.g., silty clay loam) optional.",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000335"
      },
      "soil_texture_meth": {
        "is_a": "core field",
        "title": "soil texture method",
        "description": "Reference or method used in determining soil texture",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000336"
      },
      "ph_meth": {
        "is_a": "core field",
        "title": "pH method",
        "description": "Reference or method used in determining ph",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0001106"
      },
      "tot_org_c_meth": {
        "is_a": "core field",
        "title": "total organic carbon method",
        "description": "Reference or method used in determining total organic carbon",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000337"
      },
      "tot_nitro_cont_meth": {
        "is_a": "core field",
        "title": "total nitrogen content method",
        "description": "Reference or method used in determining the total nitrogen",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000338"
      },
      "microbial_biomass": {
        "is_a": "core field",
        "title": "microbial biomass",
        "description": "The part of the organic matter in the soil that constitutes living microorganisms smaller than 5-10 micrometer. If you keep this, you would need to have correction factors used for conversion to the final units",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: ton, kilogram, gram per kilogram soil",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000650"
      },
      "micro_biomass_meth": {
        "is_a": "core field",
        "title": "microbial biomass method",
        "description": "Reference or method used in determining microbial biomass",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000339"
      },
      "link_addit_analys": {
        "is_a": "core field",
        "title": "links to additional analysis",
        "description": "Link to additional analysis results performed on the sample",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000340"
      },
      "extreme_salinity": {
        "is_a": "core field",
        "title": "extreme_unusual_properties/salinity",
        "description": "Measured salinity",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: millisiemens per meter",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000651"
      },
      "salinity_meth": {
        "is_a": "core field",
        "title": "salinity method",
        "description": "Reference or method used in determining salinity",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000341"
      },
      "heavy_metals": {
        "is_a": "core field",
        "title": "extreme_unusual_properties/heavy metals",
        "description": "Heavy metals present in the sequenced sample and their concentrations. For multiple heavy metals and concentrations, add multiple copies of this field.",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "mercury;0.09 micrograms per gram"
          }
        ],
        "comments": [
          "Expected value: heavy metal name;measurement value unit",
          "Preferred unit: microgram per gram",
          "Occurrence: m",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000652"
      },
      "heavy_metals_meth": {
        "is_a": "core field",
        "title": "extreme_unusual_properties/heavy metals method",
        "description": "Reference or method used in determining heavy metals",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or url",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000343"
      },
      "al_sat": {
        "is_a": "core field",
        "title": "extreme_unusual_properties/Al saturation",
        "description": "Aluminum saturation (esp. For tropical soils)",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: percentage",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "slot_uri": "MIXS:0000607"
      },
      "al_sat_meth": {
        "is_a": "core field",
        "title": "extreme_unusual_properties/Al saturation method",
        "description": "Reference or method used in determining Al saturation",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: PMID,DOI or URL",
          "Occurrence: 1",
          "This field is used uniquely in: soil"
        ],
        "pattern": "{PMID}|{DOI}|{URL}",
        "slot_uri": "MIXS:0000324"
      },
      "biochem_oxygen_dem": {
        "is_a": "core field",
        "title": "biochemical oxygen demand",
        "description": "Amount of dissolved oxygen needed by aerobic biological organisms in a body of water to break down organic material present in a given water sample at certain temperature over a specific time period",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "slot_uri": "MIXS:0000653"
      },
      "chem_oxygen_dem": {
        "is_a": "core field",
        "title": "chemical oxygen demand",
        "description": "A measure of the capacity of water to consume oxygen during the decomposition of organic matter and the oxidation of inorganic chemicals such as ammonia and nitrite",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "slot_uri": "MIXS:0000656"
      },
      "efficiency_percent": {
        "is_a": "core field",
        "title": "efficiency percent",
        "description": "Percentage of volatile solids removed from the anaerobic digestor",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "slot_uri": "MIXS:0000657"
      },
      "emulsions": {
        "is_a": "core field",
        "title": "emulsions",
        "description": "Amount or concentration of substances such as paints, adhesives, mayonnaise, hair colorants, emulsified oils, etc.; can include multiple emulsion types",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: emulsion name;measurement value",
          "Preferred unit: gram per liter",
          "Occurrence: m",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000660"
      },
      "gaseous_substances": {
        "is_a": "core field",
        "title": "gaseous substances",
        "description": "Amount or concentration of substances such as hydrogen sulfide, carbon dioxide, methane, etc.; can include multiple substances",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: gaseous substance name;measurement value",
          "Preferred unit: micromole per liter",
          "Occurrence: m",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000661"
      },
      "indust_eff_percent": {
        "is_a": "core field",
        "title": "industrial effluent percent",
        "description": "Percentage of industrial effluents received by wastewater treatment plant",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: percentage",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "slot_uri": "MIXS:0000662"
      },
      "inorg_particles": {
        "is_a": "core field",
        "title": "inorganic particles",
        "description": "Concentration of particles such as sand, grit, metal particles, ceramics, etc.; can include multiple particles",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: inorganic particle name;measurement value",
          "Preferred unit: mole per liter, milligram per liter",
          "Occurrence: m",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000664"
      },
      "org_particles": {
        "is_a": "core field",
        "title": "organic particles",
        "description": "Concentration of particles such as faeces, hairs, food, vomit, paper fibers, plant material, humus, etc.",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: particle name;measurement value",
          "Preferred unit: gram per liter",
          "Occurrence: m",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000665"
      },
      "pre_treatment": {
        "is_a": "core field",
        "title": "pre-treatment",
        "description": "The process of pre-treatment removes materials that can be easily collected from the raw wastewater",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: pre-treatment type",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000348"
      },
      "primary_treatment": {
        "is_a": "core field",
        "title": "primary treatment",
        "description": "The process to produce both a generally homogeneous liquid capable of being treated biologically and a sludge that can be separately treated or processed",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: primary treatment type",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000349"
      },
      "reactor_type": {
        "is_a": "core field",
        "title": "reactor type",
        "description": "Anaerobic digesters can be designed and engineered to operate using a number of different process configurations, as batch or continuous, mesophilic, high solid or low solid, and single stage or multistage",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: reactor type name",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000350"
      },
      "secondary_treatment": {
        "is_a": "core field",
        "title": "secondary treatment",
        "description": "The process for substantially degrading the biological content of the sewage",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: secondary treatment type",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000351"
      },
      "sewage_type": {
        "is_a": "core field",
        "title": "sewage type",
        "description": "Type of wastewater treatment plant as municipial or industrial",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: sewage type name",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000215"
      },
      "sludge_retent_time": {
        "is_a": "core field",
        "title": "sludge retention time",
        "description": "The time activated sludge remains in reactor",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: hours",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "slot_uri": "MIXS:0000669"
      },
      "soluble_inorg_mat": {
        "is_a": "core field",
        "title": "soluble inorganic material",
        "description": "Concentration of substances such as ammonia, road-salt, sea-salt, cyanide, hydrogen sulfide, thiocyanates, thiosulfates, etc.",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: soluble inorganic material name;measurement value",
          "Preferred unit: gram, microgram, mole per liter, gram per liter, parts per million",
          "Occurrence: m",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000672"
      },
      "soluble_org_mat": {
        "is_a": "core field",
        "title": "soluble organic material",
        "description": "Concentration of substances such as urea, fruit sugars, soluble proteins, drugs, pharmaceuticals, etc.",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: soluble organic material name;measurement value",
          "Preferred unit: gram, microgram, mole per liter, gram per liter, parts per million",
          "Occurrence: m",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0000673"
      },
      "tertiary_treatment": {
        "is_a": "core field",
        "title": "tertiary treatment",
        "description": "The process providing a final treatment stage to raise the effluent quality before it is discharged to the receiving environment",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: tertiary treatment type",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000352"
      },
      "tot_phosphate": {
        "is_a": "core field",
        "title": "total phosphate",
        "description": "Total amount or concentration of phosphate",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, micromole per liter",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "slot_uri": "MIXS:0000689"
      },
      "wastewater_type": {
        "is_a": "core field",
        "title": "wastewater type",
        "description": "The origin of wastewater such as human waste, rainfall, storm drains, etc.",
        "range": "string",
        "multivalued": false,
        "examples": [
          {
            "value": ""
          }
        ],
        "comments": [
          "Expected value: wastewater type name",
          "Occurrence: 1",
          "This field is used uniquely in: wastewater_sludge"
        ],
        "pattern": "{text}",
        "slot_uri": "MIXS:0000353"
      },
      "atmospheric_data": {
        "is_a": "core field",
        "title": "atmospheric data",
        "description": "Measurement of atmospheric data; can include multiple data",
        "range": "string",
        "multivalued": true,
        "examples": [
          {
            "value": "wind speed;9 knots"
          }
        ],
        "comments": [
          "Expected value: atmospheric data name;measurement value",
          "Occurrence: m",
          "This field is used uniquely in: water"
        ],
        "pattern": "{text};{float} {unit}",
        "slot_uri": "MIXS:0001097"
      },
      "bac_prod": {
        "is_a": "core field",
        "title": "bacterial production",
        "description": "Bacterial production in the water column measured by isotope uptake",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "5 milligram per cubic meter per day"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per cubic meter per day",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000683"
      },
      "bac_resp": {
        "is_a": "core field",
        "title": "bacterial respiration",
        "description": "Measurement of bacterial respiration in the water column",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "300 micromole oxygen per liter per hour"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per cubic meter per day, micromole oxygen per liter per hour",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000684"
      },
      "conduc": {
        "is_a": "core field",
        "title": "conductivity",
        "description": "Electrical conductivity of water",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "10 milliSiemens per centimeter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milliSiemens per centimeter",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000692"
      },
      "diss_inorg_nitro": {
        "is_a": "core field",
        "title": "dissolved inorganic nitrogen",
        "description": "Concentration of dissolved inorganic nitrogen",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "761 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, micromole per liter",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000698"
      },
      "down_par": {
        "is_a": "core field",
        "title": "downward PAR",
        "description": "Visible waveband radiance and irradiance measurements in the water column",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "28.71 microEinstein per square meter per second"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microEinstein per square meter per second, microEinstein per square centimeter per second",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000703"
      },
      "fluor": {
        "is_a": "core field",
        "title": "fluorescence",
        "description": "Raw or converted fluorescence of water",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "2.5 volts"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram chlorophyll a per cubic meter, volts",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000704"
      },
      "light_intensity": {
        "is_a": "core field",
        "title": "light intensity",
        "description": "Measurement of light intensity",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.3 lux"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: lux",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000706"
      },
      "part_org_nitro": {
        "is_a": "core field",
        "title": "particulate organic nitrogen",
        "description": "Concentration of particulate organic nitrogen",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.3 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, micromole per liter",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000719"
      },
      "photon_flux": {
        "is_a": "core field",
        "title": "photon flux",
        "description": "Measurement of photon flux",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "3.926 micromole photons per second per square meter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: number of photons per second per unit area",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000725"
      },
      "primary_prod": {
        "is_a": "core field",
        "title": "primary production",
        "description": "Measurement of primary production, generally measured as isotope uptake",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "100 milligram per cubic meter per day"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per cubic meter per day, gram per square meter per day",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000728"
      },
      "size_frac_low": {
        "is_a": "core field",
        "title": "size-fraction lower threshold",
        "description": "Refers to the mesh/pore size used to pre-filter/pre-sort the sample. Materials larger than the size threshold are excluded from the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.2 micrometer"
          }
        ],
        "comments": [
          "Expected value: value",
          "Preferred unit: micrometer",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000735"
      },
      "size_frac_up": {
        "is_a": "core field",
        "title": "size-fraction upper threshold",
        "description": "Refers to the mesh/pore size used to retain the sample. Materials smaller than the size threshold are excluded from the sample",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "20 micrometer"
          }
        ],
        "comments": [
          "Expected value: value",
          "Preferred unit: micrometer",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000736"
      },
      "soluble_react_phosp": {
        "is_a": "core field",
        "title": "soluble reactive phosphorus",
        "description": "Concentration of soluble reactive phosphorus",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.1 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: micromole per liter, milligram per liter, parts per million",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000738"
      },
      "suspend_part_matter": {
        "is_a": "core field",
        "title": "suspended particulate matter",
        "description": "Concentration of suspended particulate matter",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "0.5 milligram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: milligram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000741"
      },
      "tot_diss_nitro": {
        "is_a": "core field",
        "title": "total dissolved nitrogen",
        "description": "Total dissolved nitrogen concentration, reported as nitrogen, measured by: total dissolved nitrogen = NH4 + NO3NO2 + dissolved organic nitrogen",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "40 microgram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000744"
      },
      "tot_inorg_nitro": {
        "is_a": "core field",
        "title": "total inorganic nitrogen",
        "description": "Total inorganic nitrogen content",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "40 microgram per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000745"
      },
      "tot_part_carb": {
        "is_a": "core field",
        "title": "total particulate carbon",
        "description": "Total particulate carbon content",
        "range": "quantity value",
        "multivalued": false,
        "examples": [
          {
            "value": "35 micromole per liter"
          }
        ],
        "comments": [
          "Expected value: measurement value",
          "Preferred unit: microgram per liter, micromole per liter",
          "Occurrence: 1",
          "This field is used uniquely in: water"
        ],
        "slot_uri": "MIXS:0000747"
      }
    },
    "classes": {},
    "subsets": {
      "checklist": {
        "description": "A MIxS checklist. These can be combined with packages"
      },
      "package": {
        "description": "A MIxS package. These can be combined with checklists"
      },
      "checklist_package_combination": {
        "description": "A combination of a checklist and a package"
      }
    },
    "enums": {
      "investigation_type_enum": {
        "permissible_values": {
          "eukaryote": {},
          "bacteria_archaea": {},
          "plasmid": {},
          "virus": {},
          "organelle": {},
          "metagenome": {},
          "metatranscriptome": {},
          "mimarks-survey": {},
          "mimarks-specimen": {},
          "misag": {},
          "mimag": {},
          "miuvig": {}
        }
      },
      "neg_cont_type_enum": {
        "permissible_values": {
          "distilled water": {},
          "phosphate buffer": {},
          "empty collection device": {},
          "empty collection tube": {},
          "DNA-free PCR mix": {},
          "sterile swab": {},
          "sterile syringe": {}
        }
      },
      "env_package_enum": {
        "permissible_values": {
          "air": {},
          "built environment": {},
          "host-associated": {},
          "human-associated": {},
          "human-skin": {},
          "human-oral": {},
          "human-gut": {},
          "human-vaginal": {},
          "hydrocarbon resources-cores": {},
          "hydrocarbon resources-fluids/swabs": {},
          "microbial mat/biofilm": {},
          "misc environment": {},
          "plant-associated": {},
          "sediment": {},
          "soil": {},
          "wastewater/sludge": {},
          "water": {}
        }
      },
      "biotic_relationship_enum": {
        "permissible_values": {
          "free living": {},
          "parasitism": {},
          "commensalism": {},
          "symbiotic": {},
          "mutualism": {}
        }
      },
      "health_disease_stat_enum": {
        "permissible_values": {
          "healthy": {},
          "diseased": {},
          "dead": {},
          "disease-free": {},
          "undetermined": {},
          "recovering": {},
          "resolving": {},
          "pre-existing condition": {},
          "pathological": {},
          "life threatening": {},
          "congenital": {}
        }
      },
      "trophic_level_enum": {
        "permissible_values": {
          "autotroph": {},
          "carboxydotroph": {},
          "chemoautotroph": {},
          "chemoheterotroph": {},
          "chemolithoautotroph": {},
          "chemolithotroph": {},
          "chemoorganoheterotroph": {},
          "chemoorganotroph": {},
          "chemosynthetic": {},
          "chemotroph": {},
          "copiotroph": {},
          "diazotroph": {},
          "facultative": {},
          "heterotroph": {},
          "lithoautotroph": {},
          "lithoheterotroph": {},
          "lithotroph": {},
          "methanotroph": {},
          "methylotroph": {},
          "mixotroph": {},
          "obligate": {},
          "chemoautolithotroph": {},
          "oligotroph": {},
          "organoheterotroph": {},
          "organotroph": {},
          "photoautotroph": {},
          "photoheterotroph": {},
          "photolithoautotroph": {},
          "photolithotroph": {},
          "photosynthetic": {},
          "phototroph": {}
        }
      },
      "rel_to_oxygen_enum": {
        "permissible_values": {
          "aerobe": {},
          "anaerobe": {},
          "facultative": {},
          "microaerophilic": {},
          "microanaerobe": {},
          "obligate aerobe": {},
          "obligate anaerobe": {}
        }
      },
      "source_uvig_enum": {
        "permissible_values": {
          "metagenome (not viral targeted)": {},
          "viral fraction metagenome (virome)": {},
          "sequence-targeted metagenome": {},
          "metatranscriptome (not viral targeted)": {},
          "viral fraction RNA metagenome (RNA virome)": {},
          "sequence-targeted RNA metagenome": {},
          "microbial single amplified genome (SAG)": {},
          "viral single amplified genome (vSAG)": {},
          "isolate microbial genome": {},
          "other": {}
        }
      },
      "virus_enrich_appr_enum": {
        "permissible_values": {
          "filtration": {},
          "ultrafiltration": {},
          "centrifugation": {},
          "ultracentrifugation": {},
          "PEG Precipitation": {},
          "FeCl Precipitation": {},
          "CsCl density gradient": {},
          "DNAse": {},
          "RNAse": {},
          "targeted sequence capture": {},
          "other": {},
          "none": {}
        }
      },
      "lib_layout_enum": {
        "permissible_values": {
          "paired": {},
          "single": {},
          "vector": {},
          "other": {}
        }
      },
      "tax_ident_enum": {
        "permissible_values": {
          "16S rRNA gene": {},
          "multi-marker approach": {},
          "other": {}
        }
      },
      "assembly_qual_enum": {
        "permissible_values": {
          "Finished genome": {},
          "High-quality draft genome": {},
          "Medium-quality draft genome": {},
          "Low-quality draft genome": {},
          "Genome fragment(s)": {}
        }
      },
      "compl_score_enum": {
        "permissible_values": {
          "high": {},
          "med": {},
          "low;{percentage}": {}
        }
      },
      "compl_appr_enum": {
        "permissible_values": {
          "marker gene": {},
          "reference based": {},
          "other": {}
        }
      },
      "contam_screen_param_enum": {
        "permissible_values": {
          "ref db": {},
          "kmer": {},
          "coverage": {},
          "combination;{text": {},
          "integer}": {}
        }
      },
      "decontam_software_enum": {
        "permissible_values": {
          "checkm/refinem": {},
          "anvi'o": {},
          "prodege": {},
          "bbtools:decontaminate.sh": {},
          "acdc": {},
          "combination": {}
        }
      },
      "sort_tech_enum": {
        "permissible_values": {
          "flow cytometric cell sorting": {},
          "microfluidics": {},
          "lazer-tweezing": {},
          "optical manipulation": {},
          "micromanipulation": {},
          "other": {}
        }
      },
      "single_cell_lysis_appr_enum": {
        "permissible_values": {
          "chemical": {},
          "enzymatic": {},
          "physical": {},
          "combination": {}
        }
      },
      "bin_param_enum": {
        "permissible_values": {
          "homology search": {},
          "kmer": {},
          "coverage": {},
          "codon usage": {},
          "combination": {}
        }
      },
      "mag_cov_software_enum": {
        "permissible_values": {
          "bwa": {},
          "bbmap": {},
          "bowtie": {},
          "other": {}
        }
      },
      "pred_genome_type_enum": {
        "permissible_values": {
          "DNA": {},
          "dsDNA": {},
          "ssDNA": {},
          "RNA": {},
          "dsRNA": {},
          "ssRNA": {},
          "ssRNA (+)": {},
          "ssRNA (-)": {},
          "mixed": {},
          "uncharacterized": {}
        }
      },
      "pred_genome_struc_enum": {
        "permissible_values": {
          "segmented": {},
          "non-segmented": {},
          "undetermined": {}
        }
      },
      "host_pred_appr_enum": {
        "permissible_values": {
          "provirus": {},
          "host sequence similarity": {},
          "CRISPR spacer match": {},
          "kmer similarity": {},
          "co-occurrence": {},
          "combination": {},
          "other": {}
        }
      },
      "organism_count_enum": {
        "permissible_values": {
          "ATP": {},
          "MPN": {},
          "other": {}
        }
      },
      "oxy_stat_samp_enum": {
        "permissible_values": {
          "aerobic": {},
          "anaerobic": {},
          "other": {}
        }
      },
      "surf_material_enum": {
        "permissible_values": {
          "adobe": {},
          "carpet": {},
          "cinder blocks": {},
          "concrete": {},
          "hay bales": {},
          "glass": {},
          "metal": {},
          "paint": {},
          "plastic": {},
          "stainless steel": {},
          "stone": {},
          "stucco": {},
          "tile": {},
          "vinyl": {},
          "wood": {}
        }
      },
      "surf_air_cont_enum": {
        "permissible_values": {
          "dust": {},
          "organic matter": {},
          "particulate matter": {},
          "volatile organic compounds": {},
          "biological contaminants": {},
          "radon": {},
          "nutrients": {},
          "biocides": {}
        }
      },
      "build_occup_type_enum": {
        "permissible_values": {
          "office": {},
          "market": {},
          "restaurant": {},
          "residence": {},
          "school": {},
          "residential": {},
          "commercial": {},
          "low rise": {},
          "high rise": {},
          "wood framed": {},
          "health care": {},
          "airport": {},
          "sports complex": {}
        }
      },
      "indoor_space_enum": {
        "permissible_values": {
          "bedroom": {},
          "office": {},
          "bathroom": {},
          "foyer": {},
          "kitchen": {},
          "locker room": {},
          "hallway": {},
          "elevator": {}
        }
      },
      "indoor_surf_enum": {
        "permissible_values": {
          "cabinet": {},
          "ceiling": {},
          "counter top": {},
          "door": {},
          "shelving": {},
          "vent cover": {},
          "window": {},
          "wall": {}
        }
      },
      "filter_type_enum": {
        "permissible_values": {
          "particulate air filter": {},
          "chemical air filter": {},
          "low-MERV pleated media": {},
          "HEPA": {},
          "electrostatic": {},
          "gas-phase or ultraviolet air treatments": {}
        }
      },
      "heat_cool_type_enum": {
        "permissible_values": {
          "radiant system": {},
          "heat pump": {},
          "forced air system": {},
          "steam forced heat": {},
          "wood stove": {}
        }
      },
      "substructure_type_enum": {
        "permissible_values": {
          "crawlspace": {},
          "slab on grade": {},
          "basement": {}
        }
      },
      "building_setting_enum": {
        "permissible_values": {
          "urban": {},
          "suburban": {},
          "exurban": {},
          "rural": {}
        }
      },
      "light_type_enum": {
        "permissible_values": {
          "natural light": {},
          "electric light": {},
          "desk lamp": {},
          "flourescent lights": {},
          "none": {}
        }
      },
      "arch_struc_enum": {
        "permissible_values": {
          "building": {},
          "shed": {},
          "home": {}
        }
      },
      "ceil_cond_enum": {
        "permissible_values": {
          "new": {},
          "visible wear": {},
          "needs repair": {},
          "damaged": {},
          "rupture": {}
        }
      },
      "ceil_finish_mat_enum": {
        "permissible_values": {
          "drywall": {},
          "mineral fibre": {},
          "tiles": {},
          "PVC": {},
          "plasterboard": {},
          "metal": {},
          "fiberglass": {},
          "stucco": {},
          "mineral wool/calcium silicate": {},
          "wood": {}
        }
      },
      "ceil_texture_enum": {
        "permissible_values": {
          "crows feet": {},
          "crows-foot stomp": {},
          "double skip": {},
          "hawk and trowel": {},
          "knockdown": {},
          "popcorn": {},
          "orange peel": {},
          "rosebud stomp": {},
          "Santa-Fe texture": {},
          "skip trowel": {},
          "smooth": {},
          "stomp knockdown": {},
          "swirl": {}
        }
      },
      "ceil_type_enum": {
        "permissible_values": {
          "cathedral": {},
          "dropped": {},
          "concave": {},
          "barrel-shaped": {},
          "coffered": {},
          "cove": {},
          "stretched": {}
        }
      },
      "build_docs_enum": {
        "permissible_values": {
          "building information model": {},
          "commissioning report": {},
          "complaint logs": {},
          "contract administration": {},
          "cost estimate": {},
          "janitorial schedules or logs": {},
          "maintenance plans": {},
          "schedule": {},
          "sections": {},
          "shop drawings": {},
          "submittals": {},
          "ventilation system": {},
          "windows": {}
        }
      },
      "door_cond_enum": {
        "permissible_values": {
          "damaged": {},
          "needs repair": {},
          "new": {},
          "rupture": {},
          "visible wear": {}
        }
      },
      "door_direct_enum": {
        "permissible_values": {
          "inward": {},
          "outward": {},
          "sideways": {}
        }
      },
      "door_loc_enum": {
        "permissible_values": {
          "north": {},
          "south": {},
          "east": {},
          "west": {}
        }
      },
      "door_mat_enum": {
        "permissible_values": {
          "aluminum": {},
          "cellular PVC": {},
          "engineered plastic": {},
          "fiberboard": {},
          "fiberglass": {},
          "metal": {},
          "thermoplastic alloy": {},
          "vinyl": {},
          "wood": {},
          "wood/plastic composite": {}
        }
      },
      "door_move_enum": {
        "permissible_values": {
          "collapsible": {},
          "folding": {},
          "revolving": {},
          "rolling shutter": {},
          "sliding": {},
          "swinging": {}
        }
      },
      "door_type_enum": {
        "permissible_values": {
          "composite": {},
          "metal": {},
          "wooden": {}
        }
      },
      "door_comp_type_enum": {
        "permissible_values": {
          "metal covered": {},
          "revolving": {},
          "sliding": {},
          "telescopic": {}
        }
      },
      "door_type_metal_enum": {
        "permissible_values": {
          "collapsible": {},
          "corrugated steel": {},
          "hollow": {},
          "rolling shutters": {},
          "steel plate": {}
        }
      },
      "door_type_wood_enum": {
        "permissible_values": {
          "bettened and ledged": {},
          "battened": {},
          "ledged and braced": {},
          "ledged and framed": {},
          "ledged, braced and frame": {},
          "framed and paneled": {},
          "glashed or sash": {},
          "flush": {},
          "louvered": {},
          "wire gauged": {}
        }
      },
      "drawings_enum": {
        "permissible_values": {
          "operation": {},
          "as built": {},
          "construction": {},
          "bid": {},
          "design": {},
          "building navigation map": {},
          "diagram": {},
          "sketch": {}
        }
      },
      "floor_cond_enum": {
        "permissible_values": {
          "new": {},
          "visible wear": {},
          "needs repair": {},
          "damaged": {},
          "rupture": {}
        }
      },
      "floor_finish_mat_enum": {
        "permissible_values": {
          "tile": {},
          "wood strip or parquet": {},
          "carpet": {},
          "rug": {},
          "laminate wood": {},
          "lineoleum": {},
          "vinyl composition tile": {},
          "sheet vinyl": {},
          "stone": {},
          "bamboo": {},
          "cork": {},
          "terrazo": {},
          "concrete": {},
          "none;specify unfinished": {},
          "sealed": {},
          "clear finish": {},
          "paint": {}
        }
      },
      "floor_water_mold_enum": {
        "permissible_values": {
          "mold odor": {},
          "wet floor": {},
          "water stains": {},
          "wall discoloration": {},
          "floor discoloration": {},
          "ceiling discoloration": {},
          "peeling paint or wallpaper": {},
          "bulging walls": {},
          "condensation": {}
        }
      },
      "floor_struc_enum": {
        "permissible_values": {
          "balcony": {},
          "floating floor": {},
          "glass floor": {},
          "raised floor": {},
          "sprung floor": {},
          "wood-framed": {},
          "concrete": {}
        }
      },
      "freq_clean_enum": {
        "permissible_values": {
          "Daily": {},
          "Weekly": {},
          "Monthly": {},
          "Quarterly": {},
          "Annually": {},
          "other": {}
        }
      },
      "furniture_enum": {
        "permissible_values": {
          "cabinet": {},
          "chair": {},
          "desks": {}
        }
      },
      "gender_restroom_enum": {
        "permissible_values": {
          "all gender": {},
          "female": {},
          "gender neurtral": {},
          "male": {},
          "male and female": {},
          "unisex": {}
        }
      },
      "handidness_enum": {
        "permissible_values": {
          "ambidexterity": {},
          "left handedness": {},
          "mixed-handedness": {},
          "right handedness": {}
        }
      },
      "heat_deliv_loc_enum": {
        "permissible_values": {
          "north": {},
          "south": {},
          "east": {},
          "west": {}
        }
      },
      "int_wall_cond_enum": {
        "permissible_values": {
          "new": {},
          "visible wear": {},
          "needs repair": {},
          "damaged": {},
          "rupture": {}
        }
      },
      "mech_struc_enum": {
        "permissible_values": {
          "subway": {},
          "coach": {},
          "carriage": {},
          "elevator": {},
          "escalator": {},
          "boat": {},
          "train": {},
          "car": {},
          "bus": {}
        }
      },
      "occup_document_enum": {
        "permissible_values": {
          "automated count": {},
          "estimate": {},
          "manual count": {},
          "videos": {}
        }
      },
      "ext_wall_orient_enum": {
        "permissible_values": {
          "north": {},
          "south": {},
          "east": {},
          "west": {},
          "northeast": {},
          "southeast": {},
          "southwest": {},
          "northwest": {}
        }
      },
      "ext_window_orient_enum": {
        "permissible_values": {
          "north": {},
          "south": {},
          "east": {},
          "west": {},
          "northeast": {},
          "southeast": {},
          "southwest": {},
          "northwest": {}
        }
      },
      "pres_animal_insect_enum": {
        "permissible_values": {
          "cat": {},
          "dog": {},
          "rodent": {},
          "snake": {},
          "other;{integer}": {}
        }
      },
      "quad_pos_enum": {
        "permissible_values": {
          "North side": {},
          "West side": {},
          "South side": {},
          "East side": {}
        }
      },
      "rel_samp_loc_enum": {
        "permissible_values": {
          "edge of car": {},
          "center of car": {},
          "under a seat": {}
        }
      },
      "room_condt_enum": {
        "permissible_values": {
          "new": {},
          "visible wear": {},
          "needs repair": {},
          "damaged": {},
          "rupture": {},
          "visible signs of mold/mildew": {}
        }
      },
      "room_loc_enum": {
        "permissible_values": {
          "corner room": {},
          "interior room": {},
          "exterior wall": {}
        }
      },
      "room_samp_pos_enum": {
        "permissible_values": {
          "north corner": {},
          "south corner": {},
          "west corner": {},
          "east corner": {},
          "northeast corner": {},
          "northwest corner": {},
          "southeast corner": {},
          "southwest corner": {},
          "center": {}
        }
      },
      "room_type_enum": {
        "permissible_values": {
          "attic": {},
          "bathroom": {},
          "closet": {},
          "conference room": {},
          "elevator": {},
          "examining room": {},
          "hallway": {},
          "kitchen": {},
          "mail room": {},
          "private office": {},
          "open office": {},
          "stairwell": {},
          ",restroom": {},
          "lobby": {},
          "vestibule": {},
          "mechanical or electrical room": {},
          "data center": {},
          "laboratory_wet": {},
          "laboratory_dry": {},
          "gymnasium": {},
          "natatorium": {},
          "auditorium": {},
          "lockers": {},
          "cafe": {},
          "warehouse": {}
        }
      },
      "room_connected_enum": {
        "permissible_values": {
          "attic": {},
          "bathroom": {},
          "closet": {},
          "conference room": {},
          "elevator": {},
          "examining room": {},
          "hallway": {},
          "kitchen": {},
          "mail room": {},
          "office": {},
          "stairwell": {}
        }
      },
      "samp_weather_enum": {
        "permissible_values": {
          "clear sky": {},
          "cloudy": {},
          "foggy": {},
          "hail": {},
          "rain": {},
          "snow": {},
          "sleet": {},
          "sunny": {},
          "windy": {}
        }
      },
      "samp_floor_enum": {
        "permissible_values": {
          "1st floor": {},
          "2nd floor": {},
          "basement": {},
          "lobby": {}
        }
      },
      "season_use_enum": {
        "permissible_values": {
          "Spring": {},
          "Summer": {},
          "Fall": {},
          "Winter": {}
        }
      },
      "shading_device_cond_enum": {
        "permissible_values": {
          "damaged": {},
          "needs repair": {},
          "new": {},
          "rupture": {},
          "visible wear": {}
        }
      },
      "shading_device_type_enum": {
        "permissible_values": {
          "bahama shutters": {},
          "exterior roll blind": {},
          "gambrel awning": {},
          "hood awning": {},
          "porchroller awning": {},
          "sarasota shutters": {},
          "slatted aluminum": {},
          "solid aluminum awning": {},
          "sun screen": {},
          "tree": {},
          "trellis": {},
          "venetian awning": {}
        }
      },
      "specific_enum": {
        "permissible_values": {
          "operation": {},
          "as built": {},
          "construction": {},
          "bid": {},
          "design": {},
          "photos": {}
        }
      },
      "train_line_enum": {
        "permissible_values": {
          "red": {},
          "green": {},
          "orange": {}
        }
      },
      "train_stat_loc_enum": {
        "permissible_values": {
          "south station above ground": {},
          "south station underground": {},
          "south station amtrak": {},
          "forest hills": {},
          "riverside": {}
        }
      },
      "train_stop_loc_enum": {
        "permissible_values": {
          "end": {},
          "mid": {},
          "downtown": {}
        }
      },
      "vis_media_enum": {
        "permissible_values": {
          "photos": {},
          "videos": {},
          "commonly of the building": {},
          "site context (adjacent buildings, vegetation, terrain, streets)": {},
          "interiors": {},
          "equipment": {},
          "3D scans": {}
        }
      },
      "wall_const_type_enum": {
        "permissible_values": {
          "frame construction": {},
          "joisted masonry": {},
          "light noncombustible": {},
          "masonry noncombustible": {},
          "modified fire resistive": {},
          "fire resistive": {}
        }
      },
      "wall_finish_mat_enum": {
        "permissible_values": {
          "plaster": {},
          "gypsum plaster": {},
          "veneer plaster": {},
          "gypsum board": {},
          "tile": {},
          "terrazzo": {},
          "stone facing": {},
          "acoustical treatment": {},
          "wood": {},
          "metal": {},
          "masonry": {}
        }
      },
      "wall_loc_enum": {
        "permissible_values": {
          "north": {},
          "south": {},
          "east": {},
          "west": {}
        }
      },
      "wall_surf_treatment_enum": {
        "permissible_values": {
          "painted": {},
          "wall paper": {},
          "no treatment": {},
          "paneling": {},
          "stucco": {},
          "fabric": {}
        }
      },
      "wall_texture_enum": {
        "permissible_values": {
          "crows feet": {},
          "crows-foot stomp": {},
          "": {},
          "double skip": {},
          "hawk and trowel": {},
          "knockdown": {},
          "popcorn": {},
          "orange peel": {},
          "rosebud stomp": {},
          "Santa-Fe texture": {},
          "skip trowel": {},
          "smooth": {},
          "stomp knockdown": {},
          "swirl": {}
        }
      },
      "water_feat_type_enum": {
        "permissible_values": {
          "fountain": {},
          "pool": {},
          "standing feature": {},
          "stream": {},
          "waterfall": {}
        }
      },
      "weekday_enum": {
        "permissible_values": {
          "Monday": {},
          "Tuesday": {},
          "Wednesday": {},
          "Thursday": {},
          "Friday": {},
          "Saturday": {},
          "Sunday": {}
        }
      },
      "window_cond_enum": {
        "permissible_values": {
          "damaged": {},
          "needs repair": {},
          "new": {},
          "rupture": {},
          "visible wear": {}
        }
      },
      "window_cover_enum": {
        "permissible_values": {
          "blinds": {},
          "curtains": {},
          "none": {}
        }
      },
      "window_horiz_pos_enum": {
        "permissible_values": {
          "left": {},
          "middle": {},
          "right": {}
        }
      },
      "window_loc_enum": {
        "permissible_values": {
          "north": {},
          "south": {},
          "east": {},
          "west": {}
        }
      },
      "window_mat_enum": {
        "permissible_values": {
          "clad": {},
          "fiberglass": {},
          "metal": {},
          "vinyl": {},
          "wood": {}
        }
      },
      "window_type_enum": {
        "permissible_values": {
          "single-hung sash window": {},
          "horizontal sash window": {},
          "fixed window": {}
        }
      },
      "window_vert_pos_enum": {
        "permissible_values": {
          "bottom": {},
          "middle": {},
          "top": {},
          "low": {},
          "high": {}
        }
      },
      "biol_stat_enum": {
        "permissible_values": {
          "wild": {},
          "natural": {},
          "semi-natural": {},
          "inbred line": {},
          "breeder's line": {},
          "hybrid": {},
          "clonal selection": {},
          "mutant": {}
        }
      },
      "samp_capt_status_enum": {
        "permissible_values": {
          "active surveillance in response to an outbreak": {},
          "active surveillance not initiated by an outbreak": {},
          "farm sample": {},
          "market sample": {},
          "other": {}
        }
      },
      "samp_dis_stage_enum": {
        "permissible_values": {
          "dissemination": {},
          "growth and reproduction": {},
          "infection": {},
          "inoculation": {},
          "penetration": {},
          "other": {}
        }
      },
      "host_sex_enum": {
        "permissible_values": {
          "female": {},
          "hermaphrodite": {},
          "non-binary": {},
          "male": {},
          "transgender": {},
          "transgender (female to male)": {},
          "transgender (male to female)": {},
          "undeclared": {}
        }
      },
      "drug_usage_enum": {
        "permissible_values": {
          "month": {},
          "week": {},
          "day": {},
          "hour": {}
        }
      },
      "study_complt_stat_enum": {
        "permissible_values": {
          "non-compliance": {},
          "lost to follow up": {},
          "other-specify": {}
        }
      },
      "special_diet_enum": {
        "permissible_values": {
          "low carb": {},
          "reduced calorie": {},
          "vegetarian": {},
          "other(to be specified)": {}
        }
      },
      "dominant_hand_enum": {
        "permissible_values": {
          "left": {},
          "right": {},
          "ambidextrous": {}
        }
      },
      "hcr_enum": {
        "permissible_values": {
          "Oil Reservoir": {},
          "Gas Reservoir": {},
          "Oil Sand": {},
          "Coalbed": {},
          "Shale": {},
          "Tight Oil Reservoir": {},
          "Tight Gas Reservoir": {},
          "other": {}
        }
      },
      "hc_produced_enum": {
        "permissible_values": {
          "Oil": {},
          "Gas-Condensate": {},
          "Gas": {},
          "Bitumen": {},
          "Coalbed Methane": {},
          "other": {}
        }
      },
      "lithology_enum": {
        "permissible_values": {
          "Basement": {},
          "Chalk": {},
          "Chert": {},
          "Coal": {},
          "Conglomerate": {},
          "Diatomite": {},
          "Dolomite": {},
          "Limestone": {},
          "Sandstone": {},
          "Shale": {},
          "Siltstone": {},
          "Volcanic": {},
          "other": {}
        }
      },
      "depos_env_enum": {
        "permissible_values": {
          "Continental - Alluvial": {},
          "Continental - Aeolian": {},
          "Continental - Fluvial": {},
          "Continental - Lacustrine": {},
          "Transitional - Deltaic": {},
          "Transitional - Tidal": {},
          "Transitional - Lagoonal": {},
          "Transitional - Beach": {},
          "Transitional - Lake": {},
          "Marine - Shallow": {},
          "Marine - Deep": {},
          "Marine - Reef": {},
          "Other - Evaporite": {},
          "Other - Glacial": {},
          "Other - Volcanic": {},
          "other": {}
        }
      },
      "hcr_geol_age_enum": {
        "permissible_values": {
          "Archean": {},
          "Cambrian": {},
          "Carboniferous": {},
          "Cenozoic": {},
          "Cretaceous": {},
          "Devonian": {},
          "Jurassic": {},
          "Mesozoic": {},
          "Neogene": {},
          "Ordovician": {},
          "Paleogene": {},
          "Paleozoic": {},
          "Permian": {},
          "Precambrian": {},
          "Proterozoic": {},
          "Silurian": {},
          "Triassic": {},
          "other": {}
        }
      },
      "sr_kerog_type_enum": {
        "permissible_values": {
          "Type I": {},
          "Type II": {},
          "Type III": {},
          "Type IV": {},
          "other": {}
        }
      },
      "sr_lithology_enum": {
        "permissible_values": {
          "Clastic": {},
          "Carbonate": {},
          "Coal": {},
          "Biosilicieous": {},
          "other": {}
        }
      },
      "sr_dep_env_enum": {
        "permissible_values": {
          "Lacustine": {},
          "Fluvioldeltaic": {},
          "Fluviomarine": {},
          "Marine": {},
          "other": {}
        }
      },
      "sr_geol_age_enum": {
        "permissible_values": {
          "Archean": {},
          "Cambrian": {},
          "Carboniferous": {},
          "Cenozoic": {},
          "Cretaceous": {},
          "Devonian": {},
          "Jurassic": {},
          "Mesozoic": {},
          "Neogene": {},
          "Ordovician": {},
          "Paleogene": {},
          "Paleozoic": {},
          "Permian": {},
          "Precambrian": {},
          "Proterozoic": {},
          "Silurian": {},
          "Triassic": {},
          "other": {}
        }
      },
      "samp_type_enum": {
        "permissible_values": {
          "core": {},
          "rock trimmings": {},
          "drill cuttings": {},
          "piping section": {},
          "coupon": {},
          "pigging debris": {},
          "solid deposit": {},
          "produced fluid": {},
          "produced water": {},
          "injected water": {},
          "water from treatment plant": {},
          "fresh water": {},
          "sea water": {},
          "drilling fluid": {},
          "procedural blank": {},
          "positive control": {},
          "negative control": {},
          "other": {}
        }
      },
      "samp_subtype_enum": {
        "permissible_values": {
          "oil phase": {},
          "water phase": {},
          "biofilm": {},
          "not applicable": {},
          "other": {}
        }
      },
      "samp_md_enum": {
        "permissible_values": {
          "DF": {},
          "RT": {},
          "KB": {},
          "MSL": {},
          "other": {}
        }
      },
      "add_recov_method_enum": {
        "permissible_values": {
          "Water Injection": {},
          "Dump Flood": {},
          "Gas Injection": {},
          "Wag Immiscible Injection": {},
          "Polymer Addition": {},
          "Surfactant Addition": {},
          "Not Applicable": {},
          "other;{timestamp}": {}
        }
      },
      "samp_collect_point_enum": {
        "permissible_values": {
          "well": {},
          "test well": {},
          "drilling rig": {},
          "wellhead": {},
          "separator": {},
          "storage tank": {},
          "other": {}
        }
      },
      "growth_habit_enum": {
        "permissible_values": {
          "erect": {},
          "semi-erect": {},
          "spreading": {},
          "prostrate": {}
        }
      },
      "plant_growth_med_enum": {
        "permissible_values": {
          "other artificial liquid medium": {},
          "other artificial solid medium": {},
          "peat moss": {},
          "perlite": {},
          "pumice": {},
          "sand": {},
          "soil": {},
          "vermiculite": {},
          "water": {}
        }
      },
      "plant_sex_enum": {
        "permissible_values": {
          "Androdioecious": {},
          "Androecious": {},
          "Androgynous": {},
          "Androgynomonoecious": {},
          "Andromonoecious": {},
          "Bisexual": {},
          "Dichogamous": {},
          "Diclinous": {},
          "Dioecious": {},
          "Gynodioecious": {},
          "Gynoecious": {},
          "Gynomonoecious": {},
          "Hermaphroditic": {},
          "Imperfect": {},
          "Monoclinous": {},
          "Monoecious": {},
          "Perfect": {},
          "Polygamodioecious": {},
          "Polygamomonoecious": {},
          "Polygamous": {},
          "Protandrous": {},
          "Protogynous": {},
          "Subandroecious": {},
          "Subdioecious": {},
          "Subgynoecious": {},
          "Synoecious": {},
          "Trimonoecious": {},
          "Trioecious": {},
          "Unisexual": {}
        }
      },
      "sediment_type_enum": {
        "permissible_values": {
          "biogenous": {},
          "cosmogenous": {},
          "hydrogenous": {},
          "lithogenous": {}
        }
      },
      "tidal_stage_enum": {
        "permissible_values": {
          "low tide": {},
          "ebb tide": {},
          "flood tide": {},
          "high tide": {}
        }
      },
      "cur_land_use_enum": {
        "permissible_values": {
          "cities": {},
          "farmstead": {},
          "industrial areas": {},
          "roads/railroads": {},
          "rock": {},
          "sand": {},
          "gravel": {},
          "mudflats": {},
          "salt flats": {},
          "badlands": {},
          "permanent snow or ice": {},
          "saline seeps": {},
          "mines/quarries": {},
          "oil waste areas": {},
          "small grains": {},
          "row crops": {},
          "vegetable crops": {},
          "horticultural plants (e.g. tulips)": {},
          "marshlands (grass,sedges,rushes)": {},
          "tundra (mosses,lichens)": {},
          "rangeland": {},
          "pastureland (grasslands used for livestock grazing)": {},
          "hayland": {},
          "meadows (grasses,alfalfa,fescue,bromegrass,timothy)": {},
          "shrub land (e.g. mesquite,sage-brush,creosote bush,shrub oak,eucalyptus)": {},
          "successional shrub land (tree saplings,hazels,sumacs,chokecherry,shrub dogwoods,blackberries)": {},
          "shrub crops (blueberries,nursery ornamentals,filberts)": {},
          "vine crops (grapes)": {},
          "conifers (e.g. pine,spruce,fir,cypress)": {},
          "hardwoods (e.g. oak,hickory,elm,aspen)": {},
          "intermixed hardwood and conifers": {},
          "tropical (e.g. mangrove,palms)": {},
          "rainforest (evergreen forest receiving >406 cm annual rainfall)": {},
          "swamp (permanent or semi-permanent water body dominated by woody plants)": {},
          "crop trees (nuts,fruit,christmas trees,nursery trees)": {}
        }
      },
      "tillage_enum": {
        "permissible_values": {
          "drill": {},
          "cutting disc": {},
          "ridge till": {},
          "strip tillage": {},
          "zonal tillage": {},
          "chisel": {},
          "tined": {},
          "mouldboard": {},
          "disc plough": {}
        }
      },
      "soil_horizon_enum": {
        "permissible_values": {
          "O horizon": {},
          "A horizon": {},
          "E horizon": {},
          "B horizon": {},
          "C horizon": {},
          "R layer": {},
          "Permafrost": {}
        }
      },
      "fao_class_enum": {
        "permissible_values": {
          "Acrisols": {},
          "Andosols": {},
          "Arenosols": {},
          "Cambisols": {},
          "Chernozems": {},
          "Ferralsols": {},
          "Fluvisols": {},
          "Gleysols": {},
          "Greyzems": {},
          "Gypsisols": {},
          "Histosols": {},
          "Kastanozems": {},
          "Lithosols": {},
          "Luvisols": {},
          "Nitosols": {},
          "Phaeozems": {},
          "Planosols": {},
          "Podzols": {},
          "Podzoluvisols": {},
          "Rankers": {},
          "Regosols": {},
          "Rendzinas": {},
          "Solonchaks": {},
          "Solonetz": {},
          "Vertisols": {},
          "Yermosols": {}
        }
      },
      "profile_position_enum": {
        "permissible_values": {
          "summit": {},
          "shoulder": {},
          "backslope": {},
          "footslope": {},
          "toeslope": {}
        }
      },
      "drainage_class_enum": {
        "permissible_values": {
          "very poorly": {},
          "poorly": {},
          "somewhat poorly": {},
          "moderately well": {},
          "well": {},
          "excessively drained": {}
        }
      }
    }
  },
  {
    "id": "http://w3id.org/mixs/ranges",
    "name": "ranges",
    "imports": [
      "linkml:types"
    ],
    "prefixes": {
      "linkml": "https://w3id.org/linkml/",
      "mixs.vocab": "https://w3id.org/mixs/vocab/",
      "MIXS": "https://w3id.org/mixs/terms/"
    },
    "default_prefix": "mixs.vocab",
    "slots": {},
    "classes": {
      "quantity value": {
        "description": "used to record a measurement",
        "attributes": {
          "has unit": {
            "description": "Example \"m\""
          },
          "has numeric value": {
            "range": "double"
          },
          "has raw value": {
            "string_serialization": "{has numeric value} {has unit}"
          }
        }
      }
    },
    "subsets": {},
    "enums": {}
  }
]