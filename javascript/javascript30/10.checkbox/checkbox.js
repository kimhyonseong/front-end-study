const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    let inBetween = false;

    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox=>{
            console.log(checkbox);

            // 자기 자신, lastChecked 일때만 동작
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('11');
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    // 누른걸 lastChecked로 등록
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));