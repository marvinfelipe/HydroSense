<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hydrological Resources</title>
    <link rel="icon" href="resources/image/tabicon.png" type="image/png">
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/hydrologicalresources.css">
</head>
<body>
    <?php include_once "static/navbar.php" ?>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6">
                <h1 class="title text-center text-lg-left">Hydrological Resources</h1>
            </div>
            <div class="col-lg-6 text-center">
                <img src="resources/HR_vectors/vectorPNG.png" class="img-fluid" alt="Hydrological Resources">
            </div>
        </div>
    </div>
    <div class="master-box">
        <div class="faq-header">
            <div class="filter-search">
                <input type="text" id="myInput" oninput="searchFunction()" placeholder="Search">
                <div id="myBtnContainer">
                    <button class="btn" onclick="filterSelection('all')"> Show all</button>
                    <button class="btn" onclick="filterSelection('tds')">TDS</button>
                    <button class="btn" onclick="filterSelection('pH')">pH</button>
                    <button class="btn" onclick="filterSelection('turbidity')">Turbidity</button>
                    <button class="btn" onclick="filterSelection('temperature')">Water Temperature</button>
                </div>
            </div>
        </div>
        <ul id="myUL">
            <li class="filterDiv all tds pH turbidity temperature">
                <span class="accordion-thumb" data-toggle="modal" data-target="#waterSafetyModal">Water Safety</span>
            </li>   
            <li class="filterDiv all pH">
                <span class="accordion-thumb" data-toggle="modal" data-target="#phLevelModal">pH Level</span>
            </li>
            <li class="filterDiv turbidity">
                <span class="accordion-thumb" data-toggle="modal" data-target="#turbidityLevelModal">Turbidity Level</span>
            </li>
            <li class="filterDiv tds">
                <span class="accordion-thumb" data-toggle="modal" data-target="#tdsLevelModal">TDS Level</span>
            </li>
            <li class="filterDiv temperature">
                <span class="accordion-thumb" data-toggle="modal" data-target="#waterTemperatureModal">Water Temperature</span>
            </li>
            <li class="filterDiv turbidity">
                <span class="accordion-thumb" data-toggle="modal" data-target="#filtrationModal">Filtration</span>
            </li>
            <li class="filterDiv pH">
                <span class="accordion-thumb" data-toggle="modal" data-target="#aerationModal">Aeration</span>
            </li>
            <li class="filterDiv tds">
                <span class="accordion-thumb" data-toggle="modal" data-target="#waterDistillationModal">Water Distillation</span>
            </li>
            <li class="filterDiv turbidity">
                <span class="accordion-thumb" data-toggle="modal" data-target="#sedimentationModal">Sedimentation</span>
            </li>
            <li class="filterDiv temperature">
                <span class="accordion-thumb" data-toggle="modal" data-target="#boilingWaterModal">Boiling Water</span>
            </li>
            <li class="filterDiv tds pH turbidity">
                <span class="accordion-thumb" data-toggle="modal" data-target="#waterTreatmentModal">Water Treatment</span>
            </li>
            <li class="filterDiv pH">
                <span class="accordion-thumb" data-toggle="modal" data-target="#alkalineWaterModal">Alkaline Water</span>
            </li>
        </ul>
    </div>

    <!-- Modal for water safety-->
    <div class="modal fade bd-example-modal-xl" id="waterSafetyModal" tabindex="-1" aria-labelledby="waterSafetyModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="waterSafetyModalLabel">Water Safety</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Water safety encompasses ensuring that water used for drinking, recreation, and environmental purposes meets quality standards and is free from contaminants.
                    It involves monitoring water quality, adhering to regulations, and promoting practices that protect public health and environmental integrity.
                    <iframe id="waterSafetyVideo" width="500" height="315" src="https://www.youtube.com/embed/G244Q4AGJ7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/G244Q4AGJ7U" target="_blank">https://www.youtube.com/embed/G244Q4AGJ7U</a></p>
                </div>
                <div class="modal-footer">
                        <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/water-safety-and-quality/drinking-water-quality-guidelines'">Guide: Water Safety planning</button>
                        <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.who.int/news-room/fact-sheets/detail/drinking-water'">Article 1: Drinking Water</button>
                        <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.intechopen.com/chapters/57345'">Article 2: Safe Drinking Water</button>
                        <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.ncbi.nlm.nih.gov/books/NBK525207/'">Article 3: Water Supply, Sanitation, and Hygiene</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for pH Level -->
    <div class="modal fade bd-example-modal-xl" id="phLevelModal" tabindex="-1" aria-labelledby="phLevelModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="phLevelModalLabel">pH Level</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    A measure of how acidic or basic a substance or solution is. pH is measured on a scale of 0 to 14.
                    On this scale, a pH value of 7 is neutral, which means it is neither acidic nor basic.
                    A pH value of less than 7 means it is more acidic, and a pH value of more than 7 means it is more basic.
                    <iframe id="phLevelVideo" width="500" height="315" src="https://www.youtube.com/embed/V5Mq_cL9Bck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/V5Mq_cL9Bck" target="_blank">https://www.youtube.com/embed/V5Mq_cL9Bck</a></p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://datastream.org/en-ca/guidebook/ph'">Guide: pH Water Quality</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.medicalnewstoday.com/articles/327185'">Article 1: The pH of water</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.wwdmag.com/what-is-articles/article/10940015/what-is-ph'">Article 2: What is pH?</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.snexplores.org/article/scientists-say-ph'">Article 3: Scientists Say: pH</button>
                </div>
            </div>
        </div>
    </div>

    
    <!-- Modal for turbidity Level -->
    <div class="modal fade bd-example-modal-xl" id="turbidityLevelModal" tabindex="-1" aria-labelledby="turbidityLevelModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="turbidityLevelModalLabel">Turbidity Level</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    The measurement of water clarity (i.e., transparency).
                    Suspended particles – such as silt, axlae, plankton, and sewage – can cause water to appear cloudy or murky.
                    These particles scatter and absorb light rays rather than allowing light to be transmitted straight through the water.
                    <iframe id="turbidityLevelVideo" width="500" height="315" src="https://www.youtube.com/embed/vuFweYh8VRI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/vuFweYh8VRI" target="_blank">https://www.youtube.com/embed/vuFweYh8VRI</a></p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://helcom.fi/wp-content/uploads/2019/08/Guidelines-for-measuring-turbidity.pdf'">Guide: Monitoring of Turbidity</button>
                        <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.wwdmag.com/what-is-articles/article/10939754/what-is-turbidity'">Article 1: What is Turbidity?</button>
                        <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.usgs.gov/special-topics/water-science-school/science/turbidity-and-water'">Article 2: Turbidity and Water</button>
                        <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.iadc-dredging.com/subject/environment/turbidity/'">Article 3: Turbidity, An Optical Quality</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Modal for TDS Level -->
    <div class="modal fade bd-example-modal-xl" id="tdsLevelModal" tabindex="-1" aria-labelledby="tdsLevelModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tdsLevelModalLabel">TDS Level</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Total dissolved solids (TDS) are the amount of organic and inorganic materials,
                such as metals, minerals, salts, and ions, dissolved in a particular volume of water.
                TDS are essentially a measure of anything dissolved in water that is not an H2O molecule.
                    <iframe id="tdsLevelVideo" width="500" height="315" src="https://www.youtube.com/embed/D5jvCN6FqOs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/D5jvCN6FqOs" target="_blank">https://www.youtube.com/embed/D5jvCN6FqOs</a></p>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.kent.co.in/blog/what-are-total-dissolved-solids-tds-how-to-reduce-them/'">Guide: TDS Level Chart for Drinking Water</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.safewater.org/fact-sheets-1/2017/1/23/tds-and-ph'">Article 1: What are TDS? </button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.researchgate.net/publication/313103314_A_Study_on_the_Total_Dissolved_Solids_and_Hardness_Level_of_Drinking_Mineral_Water_in_Bangladesh'">Article 2: Study on Total Dissolved Solids</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.freshwatersystems.com/blogs/blog/what-is-tds-in-water-why-should-you-measure-it'">Article 3: What Is TDS in Water & Why Should You Measure It?</button>
                    </div>
                </div>
            </div>
        </div>

    
    <!-- Modal for water temperature -->
    <div class="modal fade bd-example-modal-xl" id="waterTemperatureModal" tabindex="-1" aria-labelledby="waterTemperatureModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="waterTemperatureModalLabel">Water Temperature</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Water temperature is a measure of the kinetic energy of water and is expressed in degrees Fahrenheit (F) or Celsius (C).
                Water temperature varies according to season, depth, and, in some cases, time of day 
                because most aquatic organisms are cold blooded, they require a certain temperature range to survive.
                    <iframe id="waterTemperatureVideo" width="500" height="315" src="https://www.youtube.com/embed/lLSfLMZHVGw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/lLSfLMZHVGw" target="_blank">https://www.youtube.com/embed/lLSfLMZHVGw</a></p>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.safewater.org/fact-sheets-1/2018/8/15/water-temperature-fact-sheet'">Guide: Why Water Temperature is important?</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3762624/'">Article 1: The effect of water temperature</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.usgs.gov/special-topics/water-science-school/science/temperature-and-water'">Article 2: Temperature and Water</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.mdpi.com/2073-4441/12/4/1049'">Article 3: Drinking Water Temperature around the Globe</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Modal for filtration -->
    <div class="modal fade bd-example-modal-xl" id="filtrationModal" tabindex="-1" aria-labelledby="filtrationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="filtrationModalLabel">Filtration</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    The clear water passes through filters that have different pore sizes
                    and are made of different materials (such as sand, gravel, and charcoal).
                    These filters remove dissolved particles and germs, such as dust, chemicals, parasites, bacteria, and viruses.
                    <iframe id="filtrationVideo" width="500" height="315" src="https://www.youtube.com/embed/MytUqOz5vbY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/MytUqOz5vbY" target="_blank">https://www.youtube.com/embed/MytUqOz5vbY</a></p>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.youtube.com/watch?v=h_aTYKtBSvw'">Guide: Filtration Testing & Piloting Guidelines</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.sciencedirect.com/topics/chemical-engineering/water-filtration'">Article 1: Water Filtration</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.sciencedirect.com/topics/engineering/filtration-process'">Article 2: Filtration Process</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5094238/'">Article 3: Effectiveness of Membrane Filtration to Improve Drinking Water</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Modal for aeration -->
    <div class="modal fade bd-example-modal-xl" id="aerationModal" tabindex="-1" aria-labelledby="aerationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="aerationModalLabel">Aeration</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Aeration involves adding air or oxygen to water to increase oxygen levels, improve water quality,and remove undesirable gases.
                It enhances aquatic ecosystems, aids in wastewater treatment, and is crucial in various industries for maintaining water quality standards.
                    <iframe id="aerationVideo" width="500" height="315" src="https://www.youtube.com/embed/uLOZblR1VyY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/uLOZblR1VyY" target="_blank">https://www.youtube.com/embed/uLOZblR1VyY</a></p>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://ag.umass.edu/cafe/fact-sheets/aeration-treatment-of-drinking-water-supplies#:~:text=Aeration%20treatment%20consists%20of%20passing,to%20volatilize%20into%20the%20air.'">Guide: Aeration Treatment of Drinking Water Supplies</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6862099/'">Article 1: Field Research on Mixing Aeration in a Drinking Water Reservoir</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.wwdmag.com/what-is-articles/article/10939130/what-is-aeration-for-wastewater-treatment'">Article 2: Aeration in Wastewater Treatment</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.solitudelakemanagement.com/top-3-aeration-articles/'">Article 3: Oxygenate Your Waterbody with Aeration</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Modal for water distillation -->
    <div class="modal fade bd-example-modal-xl" id="waterDistillationModal" tabindex="-1" aria-labelledby="waterDistillationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="waterDistillationModalLabel">Water Distillation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Water distillation is a purification process where water is boiled to produce steam,
                    which is then condensed back into liquid water, effectively separating it from impurities.
                    This method removes contaminants such as salts, minerals, and organic compounds,
                    yielding highly purified water suitable for various applications.
                    <iframe id="waterDistillationVideo" width="500" height="315" src="https://www.youtube.com/embed/VHZitT0-fCY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/VHZitT0-fCY" target="_blank">https://www.youtube.com/embed/VHZitT0-fCY</a></p>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://extensionpubs.unl.edu/publication/g1493/pdf/view'">Guide: Drinking Water Treatment:Distillation</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.medicalnewstoday.com/articles/317698#what-is-distilled-water'">Article 1: What is Distilled Water?</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.wwdmag.com/what-is-articles/article/10940138/what-is-water-distillation'">Article 2: What is Water Distillation?</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.iwapublishing.com/news/distillation-treatment-and-removal-contaminants-drinking-water'">Article 3: Distillation Treatment and Removal of Contaminants from Drinking Water</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Modal for sedimentation -->
    <div class="modal fade bd-example-modal-xl" id="sedimentationModal" tabindex="-1" aria-labelledby="sedimentationModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="sedimentationModalLabel">Sedimentation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Sedimentation is the process where particles settle out from a fluid (liquid) under gravity's influence.
                    It's crucial in natural environments like rivers and lakes, in wastewater treatment to separate solids from liquids, 
                    and in geological processes forming sedimentary rocks.
                    <iframe id="sedimentationVideo" width="500" height="315" src="https://www.youtube.com/embed/YQ2kIXaRNWE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/YQ2kIXaRNWE" target="_blank">https://www.youtube.com/embed/YQ2kIXaRNWE</a></p>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.etch2o.com/sedimentation-in-water-treatment/'">Guide: Sedimentation in Water Treatment</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://iopscience.iop.org/article/10.1088/1755-1315/1076/1/012049'">Article 1: Increasing the efficiency of sedimentation tanks for drinking water treatment</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.tandfonline.com/doi/full/10.1080/23570008.2023.2210892'">Article 2: Reduction of sedimentation</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.iwapublishing.com/news/sedimentation-processes'">Article 3: Sedimentation Processes</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Modal for boiling water -->
    <div class="modal fade bd-example-modal-xl" id="boilingWaterModal" tabindex="-1" aria-labelledby="boilingWaterModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="boilingWaterModalLabel">Boiling Water</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Boiling water refers to the process of heating water to its boiling point,
                    where it transitions from a liquid state to a gaseous state (steam or vapor).
                    This process occurs when the water reaches a temperature at which its vapor pressure equals the atmospheric pressure surrounding it.
                    <iframe id="boilingWaterVideo" width="500" height="315" src="https://www.youtube.com/embed/egwCLxxSfwI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/egwCLxxSfwI" target="_blank">https://www.youtube.com/embed/egwCLxxSfwI</a></p>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.cdc.gov/healthywater/emergency/drinking/drinking-water-advisories/boil-water-advisory.html#:~:text=If%20bottled%20water%20is%20not,a%20pitcher%20that%20filters%20water).'">Guide: Boil Water Advisory</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.cdc.gov/healthywater/emergency/making-water-safe.html'">Article 1: Making Water Safe in an Emergency</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.medicalnewstoday.com/articles/319673'">Article 2: What are the benefits of drinking hot water?</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.britannica.com/science/boiling-point'">Article 3: Boiling point</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Modal for water treatment -->
    <div class="modal fade bd-example-modal-xl" id="waterTreatmentModal" tabindex="-1" aria-labelledby="waterTreatmentModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="waterTreatmentModalLabel">Water Treatment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Water treatment is the process of improving the quality of water to make it more acceptable for a specific end-use.
                    The end-use may be drinking, industrial water supply, irrigation, river flow maintenance, water recreation, or many other uses,
                    including being safely returned to the environment. The aim is to remove contaminants and undesirable components or reduce their concentration so that the water becomes fit for its desired application.
                    <iframe id="waterTreatmentVideo" width="500" height="315" src="https://www.youtube.com/embed/0_ZcCqqpS2o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/0_ZcCqqpS2o" target="_blank">https://www.youtube.com/embed/0_ZcCqqpS2o</a></p>
                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.cdc.gov/healthywater/drinking/travel/backcountry_water_treatment.html'">Guide: A Guide to Drinking Water Treatment and Sanitation</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.sciencedirect.com/topics/earth-and-planetary-sciences/drinking-water-treatment'">Article 1: Drinking Water Treatment</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://safetyculture.com/topics/water-treatment/'">Article 2: What is Water Treatment?</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/water-treatment'">Article 3: Water Management, Treatment and Environmental Impact</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Modal for alkaline water -->
    <div class="modal fade bd-example-modal-xl" id="alkalineWaterModal" tabindex="-1" aria-labelledby="alkalineWaterModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="alkalineWaterModalLabel">Alkaline Water</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Alkaline water is water that has a higher pH level than regular drinking water.
                    The pH scale ranges from 0 to 14, with 7 being neutral. Regular drinking water typically
                    has a neutral pH of 7, while alkaline water has a pH level greater than 7, usually between 8 and 9.
                    <iframe id="alkalineWaterVideo" width="500" height="315" src="https://www.youtube.com/embed/s7KKost6a34" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Video Source: <a href="https://www.youtube.com/embed/s7KKost6a34" target="_blank">https://www.youtube.com/embed/s7KKost6a34</a></p>

                    </div>
                    <div class="modal-footer">
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://distillata.com/blog/a-complete-guide-to-alkaline-water/'">Guide: What is Alkaline Water?</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.healthline.com/health/food-nutrition/alkaline-water-benefits-risks'">Article 1: What Is Alkaline Water and what are the benefits?</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4906185/'">Article 2: Alkaline Water and Longevity: A Murine Study</button>
                    <button class="btn btn-primary btn-custom-size" onclick="window.location.href='https://www.medicalnewstoday.com/articles/313681#benefits'">Article 3: Is alkaline water good for you?</button>
                    </div>
                </div>
            </div>
        </div>


    <!-- Continue creating modals for other sections -->
    <!-- Add this Bootstrap script at the end of the body -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script>
        function searchFunction() {
            var input, filter, ul, li, s, p, i, txtValue;
            input = document.getElementById('myInput');
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName('li');

            // If the input is empty, show all items
            if (filter === "") {
                for (i = 0; i < li.length; i++) {
                    li[i].style.display = "";
                }
                return;
            }

            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
                s = li[i].getElementsByTagName("span")[0];
                txtValue = (s.textContent || s.innerText);
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }

        filterSelection("all");
        function filterSelection(c) {
            var x, i;
            x = document.getElementsByClassName("filterDiv");
            if (c == "all") c = "";
            for (i = 0; i < x.length; i++) {
                RemoveClass(x[i], "show");
                if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
            }
        }

        function AddClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
            }
        }

        function RemoveClass(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");
        }

        $(document).ready(function() {
        // Function to stop video playback when modal is closed
        function stopVideo(modalId, iframeId) {
            $(modalId).on('hidden.bs.modal', function () {
                $(iframeId).attr('src', '');
            });

            $(modalId).on('show.bs.modal', function () {
                var src = $(iframeId).data('src');
                $(iframeId).attr('src', src);
            });
        }

        // Set data-src attribute to iframe
        $('#waterSafetyVideo').data('src', 'https://www.youtube.com/embed/G244Q4AGJ7U');
        $('#phLevelVideo').data('src', 'https://www.youtube.com/embed/V5Mq_cL9Bck');
        $('#turbidityLevelVideo').data('src', 'https://www.youtube.com/embed/vuFweYh8VRI');
        $('#tdsLevelVideo').data('src', 'https://www.youtube.com/embed/D5jvCN6FqOs');
        $('#waterTemperatureVideo').data('src', 'https://www.youtube.com/embed/lLSfLMZHVGw');
        $('#filtrationVideo').data('src', 'https://www.youtube.com/embed/MytUqOz5vbY');
        $('#aerationVideo').data('src', 'https://www.youtube.com/embed/uLOZblR1VyY');
        $('#waterDistillationVideo').data('src', 'https://www.youtube.com/embed/VHZitT0-fCY');
        $('#sedimentationVideo').data('src', 'https://www.youtube.com/embed/YQ2kIXaRNWE');
        $('#boilingWaterVideo').data('src', 'https://www.youtube.com/embed/egwCLxxSfwI');
        $('#waterTreatmentVideo').data('src', 'https://www.youtube.com/embed/0_ZcCqqpS2o');
        $('#alkalineWaterVideo').data('src', 'https://www.youtube.com/embed/s7KKost6a34');

        // Apply stop video function to each modal
        stopVideo('#waterSafetyModal', '#waterSafetyVideo');
        stopVideo('#phLevelModal', '#phLevelVideo');
        stopVideo('#turbidityLevelModal', '#turbidityLevelVideo');
        stopVideo('#tdsLevelModal', '#tdsLevelVideo');
        stopVideo('#waterTemperatureModal', '#waterTemperatureVideo');
        stopVideo('#filtrationModal', '#filtrationVideo');
        stopVideo('#aerationModal', '#aerationVideo');
        stopVideo('#waterDistillationModal', '#waterDistillationVideo');
        stopVideo('#sedimentationModal', '#sedimentationVideo');
        stopVideo('#boilingWaterModal', '#boilingWaterVideo');
        stopVideo('#waterTreatmentModal', '#waterTreatmentVideo');
        stopVideo('#alkalineWaterModal', '#alkalineWaterVideo');
    });
    </script>
</body>
</html>
