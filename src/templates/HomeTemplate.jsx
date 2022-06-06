import React from 'react'
import { Route } from 'react-router-dom'
import FooterHome from '../components/FooterHome/FooterHome'
import HeaderHome from '../components/HeaderHome/HeaderHome'

export default function HomeTemplate(props) { //props: {component: , path: '', mobileComponent: }



    return (
        <Route exact path={props.path} render={(propsRoute) => {

            return <>
                <HeaderHome {...propsRoute} />
                <div style={{ minHeight: '70vh' }}>
                    <props.component {...propsRoute} />
                </div>
                <FooterHome {...propsRoute} />
            </>
        }} />
    )
}
