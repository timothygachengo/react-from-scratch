
type ElementProps = {
    tag: any,
    props: any,
    children: any[]
}

const React = {
    createElement : (tag : any, props: any, ...children: any [] ) => {
        if (typeof tag === 'function') {
            return tag(props, ...children)
        }

        const el = {
            tag,
            props,
            children
        }
        console.log(el)
        return el;
    }
}

const render = (el: ElementProps, container: HTMLElement) => {
    let domEl: any = null;
    if (typeof el === "string") {
        domEl = document.createTextNode(el);
        container.appendChild(domEl);
        return;
    }

    domEl = document.createElement(el.tag);

    if (el.children && el.children.length > 0) {
        el.children.forEach((node) => render(node, domEl))
    }
    container.appendChild(domEl);
}

React.createElement("div", null,
    React.createElement("h1", null, "Hello World"),
    React.createElement("p", null, "This is a paragraph")
);


const App = ({ title, paragraph } : { title: string, paragraph: string }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}


const par = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi optio, nemo itaque, eveniet quo earum error iste inventore distinctio doloremque vitae ipsa adipisci neque iure! Quibusdam laborum molestiae voluptate"
render(<App title="Welcome to React" paragraph={par}/>, document.getElementById('root'))
