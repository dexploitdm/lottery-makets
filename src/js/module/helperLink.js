export default function initHelperLink() {

    const helperBlock = $('.js-helper-block');
    if(helperBlock.length > 0){
        if(window.location.hash) {
            console.log(window.location.hash)
            let item = window.location.hash + '-tab';
            $(item).click()
        }
    }
}
