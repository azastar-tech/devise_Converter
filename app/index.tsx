import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import axios from "axios";

import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from "react-native";
import currencies, { Currency } from './currency';

export default function Index() {
  const [active, setActive] = useState(currencies[0])
  const [convertTo, setConvertTo] = useState(currencies[2])
  const [converted, setConverted] = useState(0)
  const [input, setInput] = useState(0)

  const Converter = async (have: string, want: string, amount: number) => {
    const key = "68917420f630bdaec7c026d5"
    try {
      const { data } = await axios.get(`https://v6.exchangerate-api.com/v6/${key}/pair/${have}/${want}/${amount}`)
      return data.conversion_result
    } catch (e) {
      return 0
    }
  }
  useEffect(() => {
    if (!input) return
    setTimeout(async () => {
      const v = await Converter(active.name, convertTo.name, input)
      setConverted(v)
    }, 300);

  }, [input, active])

  const handleSwitch = () => {
    const tmp = convertTo
    setConvertTo(active)
    setActive(tmp)
  }

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 6, paddingVertical: 32, backgroundColor: "#F6F6F6" }} >
      <View style={{ alignItems: "center", gap: 3, marginVertical: 9 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#1F2261", textAlign: "center" }}>Currency Converter</Text>
        <Text style={{ fontSize: 12, textAlign: "center", width: "80%" }}>Check live rates, set rate alerts, receive notifications and more.</Text>
      </View>


      <View style={{ backgroundColor: "#fff", height: 300, width: "98%", borderRadius: 20, paddingVertical: 12, paddingHorizontal: 9, marginVertical: 9 }}>

        {/* @ts-ignore */}
        <Aza setCurrency={setActive} setter={setInput} value={input} currency={active} text='Amount' isActive />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#F6F6F6" }} />
          <Pressable onPress={() => handleSwitch()} style={{ height: 45, width: 45, borderRadius: "100%", backgroundColor: "#26278D", justifyContent: "center", alignItems: "center" }}>
            <MaterialCommunityIcons name="swap-vertical" size={24} color="white" />
          </Pressable>
          <View style={{ flex: 1, height: 1, backgroundColor: "#F6F6F6" }} />
        </View>

        <Aza setCurrency={setConvertTo} value={converted} currency={convertTo} text='Contverted Amount' isActive={false} />

      </View>

      <View style={{ marginVertical: 9, paddingHorizontal: 9 }}>
        <Text style={{ color: "#A1A1A1", fontSize: 14 }}>Indicative Exchange Rate </Text>
        {input && converted && <Text style={{ fontSize: 18, fontWeight: "bold", color: "" }}>{`${input} ${active.name}`} = {`${converted} ${convertTo.name}`} </Text>
        }
      </View>

    </View>
  );
}

const Aza = ({ text, isActive, currency, setCurrency, value, setter }: { setCurrency: (c: Currency) => void, text: string, isActive: boolean, currency: Currency, value: number, setter?: (e: string) => void }) => {
  return (
    <View style={{ marginVertical: 9 }}>
      <Text style={{ fontSize: 12, color: "#989898" }}>{text} </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <View style={{ width: 40, height: 40, borderRadius: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 22 }}>
              {currency.flag}
            </Text>

          </View>

          <Text style={{ fontSize: 20, color: "#26278D", fontWeight: "bold" }}>{currency.name} </Text>
          <AntDesign name="down" size={16} color="#3C3C3C" />
        </Pressable>

        <View style={{ width: 145, height: 47, backgroundColor: "#EFEFEF", justifyContent: "center", borderRadius: 12, alignItems: "center" }}>
          {
            //@ts-ignore
            isActive ? <TextInput onChangeText={setter} placeholder='' value={value} inputMode='numeric' style={{ width: "100%", height: "99%", paddingHorizontal: 4 }} />
              : <Text> {value} </Text>
          }
        </View>

      </View>

    </View>
  )
}