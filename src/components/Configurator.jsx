import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
    const {
        legs,
        setLegs,
        tabletopMaterials,
        tabletopMaterial,
        setTabletopMaterial,
        legsColors,
        legsColor,
        setLegColor,
        tabletopGeometries,
        tabletopGeometry,
        setTabletopGeometry
    } = useCustomization();

    return (
        <div className="configurator">
            <div className="configurator__section">
                <div className="configurator__section__title">Форма стільниці</div>
                <div className="configurator__section__values">
                    {tabletopGeometries.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${item.title === tabletopGeometry.title ? "item--active" : ""
                                }`}
                            onClick={() => setTabletopGeometry(item)}
                        >
                            <div
                              style={{ 
                                height: '32px',
                                width: '60px',
                                margin: '0 0 10px 0',
                                border: '1px solid white',
                                borderRadius: `${item.title === 'straight' ? "0px" : '7px'}`,
                              }} 
                            />
                            <div className="item__label">{item.ua}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="configurator__section">
                <div className="configurator__section__title">Колір стільниці</div>
                <div className="configurator__section__values">
                    {tabletopMaterials.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${item.title === tabletopMaterial.title ? "item--active" : ""
                                }`}
                            onClick={() => setTabletopMaterial(item)}
                        >
                            <div
                                className="item__dot"
                             style={{ backgroundImage: `url(${item.imageLink})`}} 
                            />
                            <div className="item__label">{item.ua}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Configurator