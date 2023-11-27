import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import ProductCardView from './ProductCardView'

const ProductRow = () => {
    const products = [1, 2, 3, 4, 5]
    return (
        <View style={{ marginTop: SIZES.medium }}>
            <FlatList
                data={products}
                renderItem={({ item }) => (<ProductCardView />)}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }}
            />
        </View>
    )
}

export default ProductRow