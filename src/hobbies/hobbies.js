//Shorthand for querySelectorAll
const boxes = document.querySelectorAll('.content');
//Event listener to run function checkBoxes on scroll
window.addEventListener('scroll', checkBoxes);
//Run function on load to show boxes that are already in view
checkBoxes();

function checkBoxes(){
    //Define a trigger point for the boxes to show
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        //Get the top of the box
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}