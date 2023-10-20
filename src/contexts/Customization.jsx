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

const legsTypes = [
    {
        title: 'Ishla',
        ua: 'Ішла',
    },
    {
        title: 'Lima',
        ua: 'Ліма',
    },
    {
        title: 'Trapezia',
        ua: 'Трапеція',
    },
    {
        title: 'Atlant',
        ua: 'Атлант',
    },
    {
        title: 'Linda',
        ua: 'Лінда',
    },
    {
        title: 'Skver',
        ua: 'Сквер',
    },
]

const legsColors = [
    {
        title: 'Black',
        ua: 'Чорний',
        color: '#000000'
    },
    {
        title: 'White',
        ua: 'Білий',
        color: '#FFFFFF'
    },
]

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    const [legs, setLegs] = useState(1);
    const [tabletopMaterial, setTabletopMaterial] = useState(tabletopMaterials[0]);
    const [tabletopGeometry, setTabletopGeometry] = useState(tabletopGeometries[0]);
    const [legsType, setLegsType] = useState(legsTypes[0]);
    const [legsColor, setLegsColor] = useState(legsColors[0]);
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
                setLegsColor,
                tabletopGeometries,
                tabletopGeometry,
                setTabletopGeometry,
                legsTypes,
                legsType,
                setLegsType
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
