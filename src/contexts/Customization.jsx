import { createContext, useContext, useState } from "react";

const tabletopMaterials = [
    {
        title: 'Oak Boras',
        ua: 'Дуб Борас',
        imageLink: 'public/textures/oak_boras/Color.jpg',
    },
    {
        title: 'Oak Palena',
        ua: 'Дуб Палена',
        imageLink: 'public/textures/oak_palena/Color.jpg',
    },
    {
        title: "Venge Luiziana",
        ua: 'Венге Луїзіана',
        imageLink: 'public/textures/venge_luiziana/Color.jpg',
    }
];

const legsColors = [
    {
        color: '#FFFFFF',
        title: 'Білий',
    },
    {
        color: "#000000",
        title: "Чорний",
    }
];

const tabletopGeometries = [
    {
        title: 'straight',
        ua: 'Пряма'
    },
    {
        title: 'rounded',
        ua: 'Заокруглена',
    },
]

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    const [legs, setLegs] = useState(1);
    const [tabletopMaterial, setTabletopMaterial] = useState(tabletopMaterials[0]);
    const [legsColor, setLegColor] = useState(legsColors[0]);
    const [tabletopGeometry, setTabletopGeometry] = useState(tabletopGeometries[0]);
    return (
        <CustomizationContext.Provider
            value={{
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
            }}
        >
            {props.children}
        </CustomizationContext.Provider>
    );
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
};
