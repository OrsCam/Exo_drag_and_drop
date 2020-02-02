
const basecircle = document.querySelector('.basecircle');
const boxcircle = document.querySelectorAll('.casecircle');
const baserectangle = document.querySelector('.baserectangle');
const boxrectangle = document.querySelectorAll('.caserectangle');



basecircle.addEventListener('dragstart', dragStart);
basecircle.addEventListener('dragend', dragEnd);
baserectangle.addEventListener('dragstart', dragStart);
baserectangle.addEventListener('dragend', dragEnd);


function dragStart() {
    this.className += ' tenu';

    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'basecircle';
}

function dragEnd() {
    this.className = 'baserectangle';
}


for (const vide of boxcircle) {

    vide.addEventListener('dragover', dragOver);

    vide.addEventListener('dragenter', dragEnter);

    vide.addEventListener('dragleave', dragLeave);

    vide.addEventListener('drop', dragDrop);


}

for (const vide of boxrectangle) {

    vide.addEventListener('dragover', dragOver);

    vide.addEventListener('dragenter', dragEnter);

    vide.addEventListener('dragleave', dragLeave);

    vide.addEventListener('drop', dragDrop);


}

function dragOver(e) {
    e.preventDefault()


}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'casecircle';
}

function dragLeave() {
    this.className = 'caserectangle';
}

function dragDrop() {
    this.className = 'casecircle';
    this.append(basecircle);
}

function dragDrop() {
    this.className = 'caserectangle';
    this.append(baserectangle);
}