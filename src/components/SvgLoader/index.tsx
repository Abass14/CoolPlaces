import React from "react";
import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

type SvgLoaderProps = {
    xml: string,
    width?: number | string,
    height?: number | string
}
const SvgLoader: React.FC<SvgLoaderProps> = ({
    xml,
    width = '100%',
    height
}) : JSX.Element => {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    )
}

export default SvgLoader;