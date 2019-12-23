import React from 'react';

class ImageCard extends React.Component(
    constructor(props){
        super(props);

        this.state = {spans: 0};

        this.imageRef = react.createRef();
    });

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.spans);
    }

    setSpans = () => {
        const height=this.imageRef.current.clientHeight;
        
        const spans = Math.ceil(height/10);

        this.ListeningStateChangedEvent({spans});
    };
    
    render() {
        const {description,urls}= this.props.image;

        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}} />
            <img ref={this.imageRef} alt={description} src={urls} />
           
        )
    }    
    

    export default ImageCard;
