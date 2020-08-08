var iconSocialMedia = document.querySelector('.icon-socialMedia'),
    iconClick = document.querySelector('.icon-contr'),
    icons = document.querySelectorAll('.icon'),
    value = false;


function showSocialMediaDiv(){
    if(!value){
        iconSocialMedia.style.display = 'flex';
        iconSocialMedia.style.opacity = 1;
        value = true;
    }else{
        iconSocialMedia.style.display = 'none';
        iconSocialMedia.style.opacity = 0;
        value = false;
    }
}
iconClick.addEventListener('click', showSocialMediaDiv);
icons.forEach(function(icon){
    icon.addEventListener('click', showSocialMediaDiv);
})

