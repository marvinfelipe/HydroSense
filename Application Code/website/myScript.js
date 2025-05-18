
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
});


// EACH PAGE 
    //tab icon
function setFavicon(url) {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = url;
}
document.addEventListener("DOMContentLoaded", function() {
    setFavicon('resources/brand/tabicon.png'); 
    renderLineChart(currentChartType); // Render the chart with the default type

}); 

    //navigation
$(function(){
    // Load the nav.html and then run the script to set the active class
    $("#nav-placeholder").load("nav.html", function() {
        var currentPage = window.location.pathname.split("/").pop();
        // Loop through each nav-link and set the active class if href matches currentPage
        $(".navbar-nav .nav-link").each(function() {
            var linkPage = $(this).attr("href");
            if (linkPage === currentPage) {
                $(this).addClass("active");
            }
        });
    });
});

// BUTTON FUNCTIONS 
function showMore() {
    var showMoreDiv = document.querySelector('.showMoreDiv');
    var button = document.querySelector('.buttonDiv .btn:first-of-type');
    if (showMoreDiv.style.display === 'none' || showMoreDiv.style.display === '') {
      showMoreDiv.style.display = 'flex';
      button.textContent = 'Show Less'
    } else {
      showMoreDiv.style.display = 'none';
      button.textContent = 'Show More'
    }
  }


  function getSensorDescription(sensorType, value) {
    let description = '';
    console.log("getSensorDescription found");
    

    switch(sensorType) {
        case 'turbidity':
            if (value <= 1) {
                description = 'Low amount of suspended particles';
            } else if (value <= 5) {
                description = 'Moderate amount of suspended particles';
            } else {
                description = 'High amount of suspended particles';
            }
            break;

        case 'tds':
            if (value < 300) {
                description = 'Lowest amount of dissolved solids';
            } else if (value <= 600) {
                description = 'Low to moderate amount of dissolved solids';
            } else if (value <= 900) {
                description = 'Moderate amount of dissolved solids';
            } else if (value <= 1200) {
                description = 'High amount of dissolved solids';
            } else {
                description = 'Very high amount of dissolved solids';
            }
            break;

        case 'ph':
            if (value >= 0 && value <= 2.3) {
                description = 'Strongly acidic water';
            } else if (value <= 4.6) {
                description = 'Moderately acidic water';
            } else if (value <= 6.4) {
                description = 'Weakly acidic water';
            } else if (value <= 8.5) {
                description = 'Neutral water';
            } else if (value <= 10) {
                description = 'Weakly alkaline water';
            } else if (value <= 12) {
                description = 'Moderately alkaline water';
            } else if (value <= 14) {
                description = 'Strongly alkaline water';
            }
            break;

        case 'temperature':
            if (value < 0) {
                description = 'Below freezing';
            } else if (value <= 15) {
                description = 'Cold water';
            } else if (value <= 25) {
                description = 'Cool water';
            } else if (value <= 35) {
                description = 'Warm water';
            } else {
                description = 'Hot water';
            }
            break;

        default:
            description = 'Invalid sensor type';
    }

    return description;
}


function getHealthRisks(tds, turbidity, ph) {
    console.log("getHealthRisks found");
    
    ph = parseFloat(ph).toFixed(2);
    
    const safe = "Generally safe for consumption. Minimal health risks associated with these water quality parameters.";
    const mildGI = "Mild gastrointestinal irritation possible. May cause temporary discomfort such as mild stomach upset or nausea in sensitive individuals.";
    const dentalErosion = "Potential for dental erosion. Prolonged consumption may lead to weakening of tooth enamel, increasing the risk of cavities.";
    const waterborne = "Increased risk of waterborne diseases. May contain harmful bacteria, viruses, or parasites that can cause various illnesses, including diarrhea, vomiting, and fever.";
    const severeGI = "Severe gastrointestinal distress likely. Can cause persistent diarrhea, vomiting, abdominal pain, and dehydration.";
    const kidney = "Kidney problems possible. Long-term consumption may lead to kidney stones or other renal issues due to mineral buildup.";
    const cardiovascular = "Cardiovascular issues may develop. High mineral content can contribute to hypertension and related heart problems over time.";
    const mineralImbalance = "Possible mineral imbalances in the body. May lead to deficiencies or excesses of certain minerals, affecting overall health.";
    const severeWaterborne = "High risk of serious waterborne diseases. Increased likelihood of contracting severe illnesses such as cholera, typhoid, or hepatitis A.";
    const parasitic = "Parasitic infections likely. May contain parasites like Giardia or Cryptosporidium, causing prolonged gastrointestinal issues.";
    const chemicalBurns = "Severe chemical burns to mouth, throat, and digestive tract possible. Can cause immediate and severe pain, tissue damage, and potential long-term complications.";
    const acidosis = "Risk of metabolic acidosis. Can disrupt the body's pH balance, potentially leading to fatigue, confusion, and in severe cases, coma.";
    const alkalosis = "Risk of metabolic alkalosis. May cause muscle twitching, hand tremors, and in severe cases, confusion or coma.";

    if (ph >= 0 && ph <= 4.6) {
        return `Extremely acidic water (pH ${ph}). ${chemicalBurns} ${dentalErosion} ${acidosis}`;
    }
    
    if (ph >= 10.1 && ph <= 14) {
        return `Extremely alkaline water (pH ${ph}). ${chemicalBurns} ${alkalosis}`;
    }
    
    if (tds > 900) {
        return `Very high mineral content (TDS ${tds} ppm). ${severeGI} ${kidney} ${cardiovascular} Potential for mineral toxicity or deficiency due to extreme mineral concentrations.`;
    }
    
    if (turbidity > 5) {
        return `High turbidity (${turbidity} NTU). ${severeWaterborne} ${parasitic} ${severeGI} The cloudy water likely contains harmful contaminants.`;
    }
    
    if (tds < 300) {
        if (turbidity <= 1) {
            if (ph >= 6.5 && ph <= 8.5) {
                return `${safe} (TDS ${tds} ppm, Turbidity ${turbidity} NTU, pH ${ph})`;
            } else if (ph > 8.5 && ph <= 10) {
                return `Slightly alkaline water (pH ${ph}). ${mildGI} ${mineralImbalance}`;
            } else if (ph >= 4.7 && ph < 6.5) {
                return `Slightly acidic water (pH ${ph}). ${mildGI} ${dentalErosion} ${mineralImbalance}`;
            }
        } else if (turbidity <= 5) {
            let baseRisk = `Elevated turbidity (${turbidity} NTU). ${waterborne}`;
            if (ph >= 6.5 && ph <= 8.5) {
                return `${baseRisk} Gastrointestinal issues (diarrhea, vomiting) possible due to potential contaminants.`;
            } else if (ph >= 4.7 && ph <= 6.4) {
                return `${baseRisk} ${mildGI} ${dentalErosion} Slightly acidic pH (${ph}) may exacerbate issues.`;
            } else if (ph >= 8.6 && ph <= 10) {
                return `${baseRisk} ${mildGI} Slightly alkaline pH (${ph}) may contribute to mineral imbalances.`;
            }
        }
    } else if (tds >= 301 && tds <= 900) {
        let baseRisk = `Elevated mineral content (TDS ${tds} ppm). ${mineralImbalance}`;
        if (turbidity <= 1) {
            baseRisk += ` ${mildGI}`;
        } else if (turbidity <= 5) {
            baseRisk += ` ${waterborne} Gastrointestinal issues likely due to combined factors.`;
        }
        
        if (ph >= 4.7 && ph <= 6.4) {
            baseRisk += ` ${dentalErosion} Slightly acidic pH (${ph}) may increase risks.`;
        } else if (ph >= 8.6 && ph <= 10) {
            baseRisk += ` Slightly alkaline pH (${ph}) may exacerbate mineral imbalances.`;
        }
        
        return baseRisk;
    }
    
    return "Unable to determine specific health risks for the given water quality parameters. Please consult a water quality expert for a thorough assessment.";
}

function getRecommendation(tds, turbidity, ph) {
    ph = parseFloat(ph).toFixed(2);
    
    const noTreatment = "No homemade treatment can safely treat this water. The water quality parameters are outside the range that can be safely treated at home. Professional water treatment or an alternative water source is strongly recommended.";
    const safeToDrink = "Water is safe to drink. All measured parameters (TDS, turbidity, and pH) are within acceptable ranges for drinking water.";
    const sedimentationFiltration = 'Let water settle for at least 24 hours (Sedimentation) to allow particles to sink, then carefully pour the clearer water through a clean, tightly woven cloth filter (Filtration). This process helps remove visible particles and some microorganisms.';
    const increasePH = "Gradually add small amounts of baking soda (sodium bicarbonate) to increase pH to neutral range (6.5-8.5). Start with about 0.1g (a pinch) per liter, stir well, and retest pH. Repeat if necessary, but do not exceed 0.5g per liter. This helps reduce the acidity of the water.";
    const decreasePH = "Gradually add a few drops of lemon juice or white vinegar to decrease pH to neutral range (6.5-8.5). Start with 1 drop per liter, stir well, and retest pH. Repeat if necessary, but do not exceed 5 drops per liter. This helps reduce the alkalinity of the water.";
    const distillation = 'Boil the water and collect its condensation (Distillation). This involves boiling water and collecting the steam as it condenses back into water. This process removes most contaminants, including minerals, most microorganisms, and many chemicals.';
    
    if ((ph >= 0 && ph <= 4.6) || (ph >= 10.1 && ph <= 14) || tds > 900 || turbidity > 5) {
        return noTreatment;
    }
    
    if (tds < 300 && turbidity <= 1) {
        if (ph >= 6.5 && ph <= 8.5) {
            return safeToDrink;
        } else if (ph > 8.5 && ph <= 10) {
            return `${decreasePH} The current pH (${ph}) is slightly alkaline.`;
        } else if (ph >= 4.7 && ph < 6.5) {
            return `${increasePH} The current pH (${ph}) is slightly acidic.`;
        }
    } else if (tds < 300 && turbidity <= 5) {
        if (ph >= 6.5 && ph <= 8.5) {
            return `${sedimentationFiltration} The water's turbidity (${turbidity} NTU) is elevated, indicating the presence of suspended particles.`;
        } else if (ph >= 4.7 && ph <= 6.4) {
            return `${sedimentationFiltration} The water's turbidity (${turbidity} NTU) is elevated. ${increasePH} The current pH (${ph}) is slightly acidic.`;
        } else if (ph >= 8.6 && ph <= 10) {
            return `${sedimentationFiltration} The water's turbidity (${turbidity} NTU) is elevated. ${decreasePH} The current pH (${ph}) is slightly alkaline.`;
        }
    } else if (tds >= 301 && tds <= 900) {
        let baseRecommendation = `${distillation} The Total Dissolved Solids (TDS) level (${tds} ppm) is elevated, indicating a high concentration of dissolved minerals and salts.`;
        if (turbidity <= 1) {
            if (ph >= 6.5 && ph <= 8.5) {
                return baseRecommendation;
            } else if (ph >= 4.7 && ph <= 6.4) {
                return `${baseRecommendation} ${increasePH} The current pH (${ph}) is slightly acidic.`;
            } else if (ph >= 8.6 && ph <= 10) {
                return `${baseRecommendation} ${decreasePH} The current pH (${ph}) is slightly alkaline.`;
            }
        } else if (turbidity <= 5) {
            baseRecommendation += ` ${sedimentationFiltration} The water's turbidity (${turbidity} NTU) is also elevated.`;
            if (ph >= 6.5 && ph <= 8.5) {
                return baseRecommendation;
            } else if (ph >= 4.7 && ph <= 6.4) {
                return `${baseRecommendation} ${increasePH} The current pH (${ph}) is slightly acidic.`;
            } else if (ph >= 8.6 && ph <= 10) {
                return `${baseRecommendation} ${decreasePH} The current pH (${ph}) is slightly alkaline.`;
            }
        }
    }
    
    return "Unable to provide a specific recommendation for the given water quality parameters. Please consult a water quality expert for personalized advice.";
}
