import React from 'react'
import AllNews from '../components/News/AllNews'

export default function News() {
    return (
        <>
            <div className='m-5 flex flex-wrap gap-10'>
                {/* -> tag title author text */}
                <AllNews tag="Phone" title="Samsung s24 ultra" author="Samsung electronics" text="The samsung is likely to decrease the price of its phone samsung galaxy s24 ultra" />
                <AllNews tag="World" title="War" author="James A.A" text="The world is being moved to start the world war-4" />
                <AllNews tag="Elections" title="US Elections" author="Jenefir D` Sauza" text="Election between Trump and Kamala " />
                <AllNews tag="Stock" title="Trade" author="M.A Jinnah" text="PSX hits the records" />
                <AllNews tag="Contsruction" title="GS Mall" author="Sh.ali69" text="GS Mall will be continued to start" />
                <AllNews tag="Levono" title="Lenovo Laptop" author="Hamza Liaqat" text="Lenovo to start to manufacture laptops officially in Pakistan." />
                <AllNews tag="US" title="Trump shoot" author="Mirza" text="Attack on trump during this campaign in Los Angles" />
            </div>
        </>
    )
}
