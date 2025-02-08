function customeRender(reactElement,container){
    // const docElement = document.createElement(reactElement.type);
    // docElement.innerHTML = reactElement.children;
    // docElement.setAttribute('href',reactElement.props.href);
    // docElement.setAttribute('target',reactElement.props.target);
    // mainContainer.appendChild(docElement);
    const docElement = document.createElement(reactElement.type);
    docElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        docElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(docElement);
}
const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector("#root");

customeRender(reactElement,mainContainer);
