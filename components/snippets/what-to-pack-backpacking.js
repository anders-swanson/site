import links from '../../lib/links'
import TabLink from '../tablink'
import utilStyles from '../../styles/utils.module.css'

export default function WTPBackpacking() {
    return (
        <>
            <h1 className={utilStyles.justifyCenter} id='what-to-pack'>What to Pack</h1>
            <div>
                <h2>Backpacks</h2>
                <ul>
                    <li>
                    <TabLink href={links.hiking.laurenPack} text="women's backpacking pack" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.andersPack} text="men's backpacking pack" /> 
                    </li>
                </ul>
                <h2>Shelter</h2>
                <ul>
                    <li>
                    <TabLink href={links.hiking.trailHutTent} text="backpacking tent" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.flameULSleepingBag} text="sleeping bag" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.etherLightSleepingpadW} text={`sleeping mat (women's), `} /> 
                    <TabLink href={links.hiking.etherLightSleepingpadM} text={`sleeping mat (men's)`} /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.aerosPremiumPillow} text="pillow" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.revelLights} text="tent lights" /> 
                    </li>
                </ul>
                <h2>Camp Kitchen</h2>
                <ul>
                    <li>
                    <TabLink href={links.hiking.pocketRocketKit} text="kitchen kit" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.electricLighter} text="electric lighter" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.spork} text="spork" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.pocketKnife} text="pocket-knife" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.nalgeneWaterBottle} text="water bottle" /> 
                    </li>
                    <li>
                    <TabLink href={links.misc.squeezeBottle} text="squeeze filter bottle" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.waterFilter} text="water filter" /> 
                    </li>
                    <li>
                    <TabLink href={links.misc.buoyElectrolytes} text={`un-flavored, un-sweetned electrolyte solution`} /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.bearVault} text="bear can" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.ursack} text="ursack" /> {`(bear bag)`}
                    </li>
                    <li>
                    <TabLink href={links.food.peakRefuelStroganoff} text="tasty camp dinner" /> 
                    </li>
                    <li>
                    <TabLink href={links.food.delicioats} text="easy no-mess camp breakfast" /> {`(discount code LAURENG for 15% off)`}
                    </li>
                </ul>

                <h2>Toiletries</h2>
                <ul>
                    <li>
                        Tooth brush
                    </li>
                    <li>
                        Floss
                    </li>
                    <li>
                    <TabLink href={links.hiking.toothPasteTabs} text="tooth paste tabs" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.bodyWipes} text={`body & face wipes`} /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.bugSpray} text="bug spray" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.afterbite} text="the BEST itch relief solution " /> {`(I literally carry this everywhere during the summer)`}
                    </li>
                    <li>
                    <TabLink href={links.hiking.firstAidKit} text="first aid kit" /> 
                    </li>
                </ul>

                <h2>Utilities</h2>
                <ul>
                    <li>
                    <TabLink href={links.hiking.headlamp} text="headlamp" /> 
                    </li>
                    <li>
                    <TabLink href={links.misc.powerBank} text="portable battery" /> 
                    </li>
                    <li>
                    <TabLink href={links.misc.kindle} text="kindle e-reader" /> 
                    </li>
                    <li>
                    <TabLink href={links.misc.forerunner645} text="Garmin GPS watch" /> 
                    </li>
                    <li>
                    <TabLink href={links.misc.stuffSack} text="dry bag, stuff sack" /> 
                    </li>
                    <li>
                    <TabLink href={links.hiking.greenTrailMaps} text="the best trail maps " /> {`(better than Nat Geo's)`}
                    </li>
                </ul>

                <h2>Clothing</h2>
                <ul>
                    <li>
                    <TabLink href={links.clothing.merrellBoot} text="hiking boots " /> {`(women's)`}
                    </li>
                    <li>
                    <TabLink href={links.clothing.altraLonePeak} text= "trail shoes " />{`(men's)`}
                    </li>
                    <li>
                    <TabLink href={links.clothing.tevaSandal} text="camp shoes" /> 
                    </li>
                    <li>
                    <TabLink href={links.clothing.bearSocks} text="hiking socks" /> 
                    </li>
                    <li>
                    <TabLink href={links.clothing.merrellBoot} text="packable puffer" /> 
                    </li>
                    <li>
                    <TabLink href={links.clothing.alderTakeAHikeShorts} text="women's hiking shorts" /> 
                    </li>
                    <li>
                    <TabLink href={links.clothing.paranaZionShorts} text="men's hiking shorts" /> 
                    </li>
                    <li>
                    <TabLink href={links.clothing.alderOpenAirPants} text="women's hiking pants" /> 
                    </li>
                    <li>
                    <TabLink href={links.clothing.pranaBrionPants} text="men's hiking pants " /> {`(6'0ft+ friendly!)`}
                    </li>
                </ul>
            </div>
        </>
    )
}