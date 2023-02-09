import React from 'react';

const ContactMap = () => {
    return (
        <>
            <section className="map-area">

                <div style={{ width: '98%' }} className="mx-auto">

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.9409342363797!2d149.12052655087552!3d-35.15809379445141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1654c34065961f%3A0x6948ae6dd2ac1d03!2s114%20Bernard%20Heinze%20Ave%2C%20Moncrieff%20ACT%202914%2C%20Australia!5e0!3m2!1sen!2sng!4v1675894864019!5m2!1sen!2sng"
                        style={{ width: '100%' }} height={600} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.48067037487!2d149.12146505087682!3d-35.19449429640564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b16535c57bb4ba7%3A0xa477b51f2365cba8!2s7%20Huxley%20Pl%2C%20Palmerston%20ACT%202913%2C%20Australia!5e0!3m2!1sen!2sng!4v1675895362949!5m2!1sen!2sng"
                        style={{ width: '100%' }} height={600} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </section>
        </>
    );
};

export default ContactMap;