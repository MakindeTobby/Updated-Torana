import React from 'react';
import HomeTwoSingleCount from '../../../components/HomeTwoSingleCount/HomeTwoSingleCount';

const HomeTwoCounter = () => {
    return (
        <>
            <section className="counter-wraper theme-bg pt-120 pb-175">
                <div className="container">
                    <div className="row justify-content-around">

                        <HomeTwoSingleCount icon="4" counter="140" subtitle="Expert Carers" />
                        <HomeTwoSingleCount icon="5" counter="399" subtitle="Problems Solved" />
                        <HomeTwoSingleCount icon="6" counter="100" subtitle="Happy Clients" />

                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoCounter;