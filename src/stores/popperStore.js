import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePopperStore = defineStore('popperStore', () => {


    const tooltip1 = ref("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus diam vehicula urna rhoncus, in varius eros varius. Donec ullamcorper ante vitae iaculis placerat. Fusce et dolor id ligula convallis euismod. Sed porttitor est in porta tempus. Nunc at sem neque.</p><p>Pellentesque interdum maximus lectus. Sed pharetra ante id sapien interdum, quis tempus metus consequat. Duis a turpis quis felis luctus placerat et id libero. Nulla laoreet, sem sit amet eleifend euismod, magna mi rutrum nulla, eu scelerisque est augue in odio. Curabitur id neque turpis.</p>") 

    
  
    return { tooltip1 }
})