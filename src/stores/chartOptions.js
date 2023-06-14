import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChartOptionsStore = defineStore('chartOptionsStore', () => {

    /*Options for Bar Chart*/
const barOptions = ref(
    {
        scales: {
            x: {
                display: false,
                stacked: true,
                grid: {
                    display:false,
                }
            },
            y: {
                display: false,
                stacked: true,
                beginAtZero: true,
                grid: {
                    display:false,
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 20
            }
        },
        animation: {
            
            onComplete: function(animation) {
                //alert('onAnimationComplete')
                
            }
        },
        plugins: {
            
            
            tooltip: {
                filter: function (tooltipItem) {
                    return tooltipItem.datasetIndex === 0;
                }
            },
            tooltip:false,
            legend: {
                display: false
            }
            
        }

    },)
/*Options for Bar Chart*/

/*Options for Pie Chart*/
const pieOptions = ref(
    {
        responsive: true,
        maintainAspectRatio: true,
        borderWidth: 0,
        layout: {
            borderWidth: 0,
            padding: 10,
        },
        plugins: {
            tooltip: {
                filter: function (tooltipItem) {
                    return tooltipItem.dataIndex === 0;
                }
            },
            tooltip:false,
            legend: {
                display: false
            }
        },
        showAllTooltips: true,
        
        animation: {
            
            onComplete: function(animation) {
                //alert('onAnimationComplete')
                
            }
        },
    }
) 
/*Options for Pie Chart*/
    
  
    return { barOptions, pieOptions }
  })