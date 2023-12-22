import React from 'react';

const ContactMap = () => {
    return (
        <>
            <section className="map-area" >

                <div style={{ width: '98%' }} className="mx-auto">




                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.394425177185!2d149.10234051113298!3d-35.146782786267394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1654d4a6195f8f%3A0x90ce2bff3dd43302!2sUnit%2019%2F1%20Devenish%20St%2C%20Taylor%20ACT%202913%2C%20Australia!5e0!3m2!1sen!2sng!4v1703155870965!5m2!1sen!2sng"
                        style={{ width: '100%' }} height={600} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </section>
        </>
    );
};

export default ContactMap;