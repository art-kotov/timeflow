const helpers = document.querySelectorAll('[data-popover-title], [data-popover-body]');

const showHelper = (e) => {
    const elemParams = e.target.getBoundingClientRect();

    const helper = document.createElement("div");

    const title = document.createElement("span");
    title.classList.add('field-helper__title');
    title.innerHTML = e.target.dataset.popoverTitle;

    const subTitle = document.createElement("span");
    subTitle.classList.add('field-helper__subtitle');
    subTitle.innerHTML = e.target.dataset.popoverBody;

    helper.append(title, subTitle);
    helper.classList.add('field-helper');
    helper.style.transform = `translate3d(${window.scrollX + elemParams.x + elemParams.width + 4}px, calc(${window.scrollY + elemParams.y + 20}px - 50%), 0)`;
    helper.style.display = 'block';
    document.body.append(helper)
};

const hideHelper = () => {
    document.querySelectorAll('.field-helper').forEach(i => i.remove())
}

helpers.forEach(i => {
    i.addEventListener("mouseenter", showHelper)
});

helpers.forEach(i => {
    i.addEventListener("mouseleave", hideHelper)
});
