import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBaseStore } from "@/stores/baseStore.js"

export const useChartData = defineStore('chartData', () => {
  
    const baseStore = useBaseStore();


    /* Item ABC */
   
    const dataLeerlingenBehalenABC = ref({
            
        labels: [
            ['A-attest', baseStore.chosenSchoolDetail.Aantal_A_attest + ' lln'], 
            ['B-attest', baseStore.chosenSchoolDetail.Aantal_B_attest + ' lln'],
            ['C-attest', baseStore.chosenSchoolDetail.Aantal_C_attest + ' lln']
        ], /*hidden in settings */
        datasets: [
            
            { 
            data: 
                [ 
                    parseFloat(baseStore.chosenSchoolDetail.A_procent.replace(/,/, '.')).toFixed(1), 
                    parseFloat(baseStore.chosenSchoolDetail.B_procent.replace(/,/, '.')).toFixed(1), 
                    parseFloat(baseStore.chosenSchoolDetail.C_procent.replace(/,/, '.')).toFixed(1)
                ],
                backgroundColor: '#F75821',
                hoverBackgroundColor: "#F75821",
                datalabels: {
                    formatter: function(value, context) {
                        return value + "%" ;
                    },
                    align: 'end',
                    anchor: 'end',
                    font: {
                        size: 11,
                        weight: 'bold',
                    },
                    backgroundColor: '#ffffff',
                    opacity:0.7
                    
                },

                

            },
            { data: 
                [ 
                    100 - parseFloat(baseStore.chosenSchoolDetail.A_procent.replace(/,/, '.')).toFixed(1), 
                    100 - parseFloat(baseStore.chosenSchoolDetail.B_procent.replace(/,/, '.')).toFixed(1), 
                    100 - parseFloat(baseStore.chosenSchoolDetail.C_procent.replace(/,/, '.')).toFixed(1)
                ],
                backgroundColor: "#feebe4",
                hoverBackgroundColor: "#feebe4",
                datalabels: {
                    display: false,
                }
                
            }
        ],
        
        
    });


    const vergelijkbareScholenA = ref({
        datasets: [
            {
                backgroundColor: ['#F75821', '#feebe4'],
                hoverBackgroundColor: ['#F75821', '#feebe4'],
                data: [83.33, 100-83.33],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })
    const vergelijkbareScholenB = ref({
        datasets: [
            {
                backgroundColor: ['#F75821', '#feebe4'],
                hoverBackgroundColor: ['#F75821', '#feebe4'],
                data: [5.4, 100-5.4],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })
    const vergelijkbareScholenC = ref({
        datasets: [
            {
                backgroundColor: ['#F75821', '#feebe4'],
                hoverBackgroundColor: ['#F75821', '#feebe4'],
                data: [6.94, 100-6.94],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    /* Item ABC */



    /* Leerlingen Kenmerken */
    
    const llnKenmerkenThuisTaal = ref({
        datasets: [
            {
                backgroundColor: ['#00ED36', '#dff4e6'],
                hoverBackgroundColor: ['#00ED36', '#dff4e6'],
                data: [
                    parseFloat(baseStore.chosenSchoolDetail.Thuistaal_procent.replace(/,/, '.')).toFixed(1), 
                    100 - parseFloat(baseStore.chosenSchoolDetail.Thuistaal_procent.replace(/,/, '.')).toFixed(1)],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenGemiddeldThuisTaalAso = ref({
        datasets: [
            {
                backgroundColor: ['#00ED36', '#dff4e6'],
                hoverBackgroundColor: ['#00ED36', '#dff4e6'],
                data: [15.5, 100-15.5],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenGemiddeldThuisTaalTso = ref({
        datasets: [
            {
                backgroundColor: ['#00ED36', '#dff4e6'],
                hoverBackgroundColor: ['#00ED36', '#dff4e6'],
                data: [17, 100-17],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenGemiddeldThuisTaalBso = ref({
        datasets: [
            {
                backgroundColor: ['#00ED36', '#dff4e6'],
                hoverBackgroundColor: ['#00ED36', '#dff4e6'],
                data: [26.4, 100-26.4],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenGemiddeldThuisTaalKso = ref({
        datasets: [
            {
                backgroundColor: ['#00ED36', '#dff4e6'],
                hoverBackgroundColor: ['#00ED36', '#dff4e6'],
                data: [11.4, 100-11.4],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenGemiddeldThuisTaalMiddenschool = ref({
        datasets: [
            {
                backgroundColor: ['#00ED36', '#dff4e6'],
                hoverBackgroundColor: ['#00ED36', '#dff4e6'],
                data: [20.3, 100-20.3],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })


    //opleiding moeder

    const llnKenmerkenOpleiding_moeder = ref({
        datasets: [
            {
                backgroundColor: ['#6cba78', '#e5eeea'],
                hoverBackgroundColor: ['#6cba78', '#e5eeea'],
                data: [
                    parseFloat(baseStore.chosenSchoolDetail.Opleiding_moeder_procent.replace(/,/, '.')).toFixed(1), 
                    100 - parseFloat(baseStore.chosenSchoolDetail.Opleiding_moeder_procent.replace(/,/, '.')).toFixed(1)],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenOpleiding_moederAso = ref({
        datasets: [
            {
                backgroundColor: ['#6cba78', '#e5eeea'],
                hoverBackgroundColor: ['#6cba78', '#e5eeea'],
                data: [10.8, 100-10.8],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenOpleiding_moederTso = ref({
        datasets: [
            {
                backgroundColor: ['#6cba78', '#e5eeea'],
                hoverBackgroundColor: ['#6cba78', '#e5eeea'],
                data: [20.6, 100-20.6],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenOpleiding_moederBso = ref({
        datasets: [
            {
                backgroundColor: ['#6cba78', '#e5eeea'],
                hoverBackgroundColor: ['#6cba78', '#e5eeea'],
                data: [42.2, 100-42.2],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenOpleiding_moederKso = ref({
        datasets: [
            {
                backgroundColor: ['#6cba78', '#e5eeea'],
                hoverBackgroundColor: ['#6cba78', '#e5eeea'],
                data: [11.7, 100-11.7],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenOpleiding_moederMiddenschool = ref({
        datasets: [
            {
                backgroundColor: ['#6cba78', '#e5eeea'],
                hoverBackgroundColor: ['#6cba78', '#e5eeea'],
                data: [20.9, 100-20.9],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    // Schooltoelage

    const llnKenmerkenSchooltoelage = ref({
        datasets: [
            {
                backgroundColor: ['#c4eba6', '#eff3ef'],
                hoverBackgroundColor: ['#c4eba6', '#eff3ef'],
                data: [
                    parseFloat(baseStore.chosenSchoolDetail.Schooltoelage_procent.replace(/,/, '.')).toFixed(1), 
                    100 - parseFloat(baseStore.chosenSchoolDetail.Schooltoelage_procent.replace(/,/, '.')).toFixed(1)],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenSchooltoelageAso = ref({
        datasets: [
            {
                backgroundColor: ['#c4eba6', '#eff3ef'],
                hoverBackgroundColor: ['#c4eba6', '#eff3ef'],
                data: [26.2, 100-26.2],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenSchooltoelageTso = ref({
        datasets: [
            {
                backgroundColor: ['#c4eba6', '#eff3ef'],
                hoverBackgroundColor: ['#c4eba6', '#eff3ef'],
                data: [39.2, 100-39.2],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenSchooltoelageBso = ref({
        datasets: [
            {
                backgroundColor: ['#c4eba6', '#eff3ef'],
                hoverBackgroundColor: ['#c4eba6', '#eff3ef'],
                data: [60.5, 100-60.5],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenSchooltoelageKso = ref({
        datasets: [
            {
                backgroundColor: ['#c4eba6', '#eff3ef'],
                hoverBackgroundColor: ['#c4eba6', '#eff3ef'],
                data: [35.9, 100-35.9],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenSchooltoelageMiddenschool = ref({
        datasets: [
            {
                backgroundColor: ['#c4eba6', '#eff3ef'],
                hoverBackgroundColor: ['#c4eba6', '#eff3ef'],
                data: [39.5, 100-39.5],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })


    // Buurt

    const llnKenmerkenBuurt = ref({
        datasets: [
            {
                backgroundColor: ['#71bcaa', '#e5eef0'],
                hoverBackgroundColor: ['#71bcaa', '#e5eef0'],
                data: [
                    parseFloat(baseStore.chosenSchoolDetail.Buurt_procent.replace(/,/, '.')).toFixed(1), 
                    100 - parseFloat(baseStore.chosenSchoolDetail.Buurt_procent.replace(/,/, '.')).toFixed(1)],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenBuurtAso = ref({
        datasets: [
            {
                backgroundColor: ['#71bcaa', '#e5eef0'],
                hoverBackgroundColor: ['#71bcaa', '#e5eef0'],
                data: [21.3, 100-21.3],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenBuurtTso = ref({
        datasets: [
            {
                backgroundColor: ['#71bcaa', '#e5eef0'],
                hoverBackgroundColor: ['#71bcaa', '#e5eef0'],
                data: [22, 100-22],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenBuurtBso = ref({
        datasets: [
            {
                backgroundColor: ['#71bcaa', '#e5eef0'],
                hoverBackgroundColor: ['#71bcaa', '#e5eef0'],
                data: [31.5, 100-31.5],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    const llnKenmerkenBuurtKso = ref({
        datasets: [
            {
                backgroundColor: ['#71bcaa', '#e5eef0'],
                hoverBackgroundColor: ['#71bcaa', '#e5eef0'],
                data: [24.8, 100-24.8],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })
    const llnKenmerkenBuurtMiddenschool = ref({
        datasets: [
            {
                backgroundColor: ['#71bcaa', '#e5eef0'],
                hoverBackgroundColor: ['#71bcaa', '#e5eef0'],
                data: [24.8, 100-24.8],
                datalabels: {
                    display: false,
                }  
            }
        ],
    })

    /* Leerlingen Kenmerken */
  
    return { 
        dataLeerlingenBehalenABC, 
        vergelijkbareScholenA, 
        vergelijkbareScholenB, 
        vergelijkbareScholenC, 

        llnKenmerkenThuisTaal,
        llnKenmerkenGemiddeldThuisTaalAso,
        llnKenmerkenGemiddeldThuisTaalTso,
        llnKenmerkenGemiddeldThuisTaalBso,
        llnKenmerkenGemiddeldThuisTaalKso,
        llnKenmerkenGemiddeldThuisTaalMiddenschool,

        llnKenmerkenOpleiding_moeder,
        llnKenmerkenOpleiding_moederAso,
        llnKenmerkenOpleiding_moederBso,
        llnKenmerkenOpleiding_moederTso,
        llnKenmerkenOpleiding_moederKso,
        llnKenmerkenOpleiding_moederMiddenschool,

        llnKenmerkenSchooltoelage,
        llnKenmerkenSchooltoelageAso,
        llnKenmerkenSchooltoelageTso,
        llnKenmerkenSchooltoelageBso,
        llnKenmerkenSchooltoelageKso,
        llnKenmerkenSchooltoelageMiddenschool,

        llnKenmerkenBuurt,
        llnKenmerkenBuurtAso,
        llnKenmerkenBuurtTso,
        llnKenmerkenBuurtBso,
        llnKenmerkenBuurtKso,
        llnKenmerkenBuurtMiddenschool,

        


     }
})