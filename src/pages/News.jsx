import React from 'react';
import AllNews from '../components/News/AllNews';

export default function News() {
    return (
        <>
            <div className='m-5 flex flex-wrap gap-10'>
                {/* id, tag, title, author, text -> props  */}
                <AllNews id="new_id_101" tag="Phone" title="Samsung s24 ultra" author="Samsung electronics" text="The samsung is likely to decrease the price of its phone samsung galaxy s24 ultra" />
                <AllNews id="new_id_102" tag="World" title="War" author="James A.A" text="The world is being moved to start the world war-4" />
                <AllNews id="new_id_103" tag="Elections" title="US Elections" author="Jenefir D` Sauza" text="Election between Trump and Kamala" />
                <AllNews id="new_id_104" tag="Stock" title="Trade" author="M.A Jinnah" text="PSX hits the records" />
                <AllNews id="new_id_105" tag="Construction" title="GS Mall" author="Sh.ali69" text="GS Mall will be continued to start" />
                <AllNews id="new_id_106" tag="Lenovo" title="Lenovo Laptop" author="Hamza Liaqat" text="Lenovo to start to manufacture laptops officially in Pakistan." />
                <AllNews id="new_id_107" tag="US" title="Trump shoot" author="Mirza" text="Attack on Trump during this campaign in Los Angeles" />
            </div>
        </>
    );
}
