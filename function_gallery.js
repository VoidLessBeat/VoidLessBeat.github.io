document.addEventListener('DOMContentLoaded', function(){

    const heroImage = document.getElementById('heroImage');
    const ImageGrid = document.getElementById('ImageGrid');
    const clickHint = heroImage.querySelector('.click-hint');

    //boolean
    let isExpanded = false;
    
    heroImage.addEventListener('click', function(){

        isExpanded = !isExpanded

        ImageGrid.classList.toggle('expanded');

    if (isExpanded){
         ImageGrid.scrollIntoView({behavior: 'smooth', block: 'center'})
    }else{
      
    //if (!isExpanded){

        heroImage.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
    });

//Keyboard support

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape' && isExpanded){

            ImageGrid.classList.remove('expanded');
            isExpanded = false;
        }
    });

    console.log("Gallery OK");
});