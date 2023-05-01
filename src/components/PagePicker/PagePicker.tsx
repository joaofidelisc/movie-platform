import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './PagePickerStyles';

function PagePicker({currentPage, totalPages, onPageChange}){
    const [pages, setPages] = useState(() => {
        const initialPages = [];
            for (let i = 0; i < 5; i++) {
                initialPages.push(currentPage + i);
            }
        return initialPages;
    });
      
    
    return(
        <View style={styles.viewContainer}>
            <View style={styles.viewButtons}>
                {
                    pages.map(page =>(
                        page == currentPage?
                        <TouchableOpacity
                            key={page}
                            style={styles.selectedButton}
                            onPress={()=>onPageChange(page)}
                        >
                            <Text style={styles.textSelectedItem}>{page}</Text>
                        </TouchableOpacity>:
                        <TouchableOpacity
                            key={page}
                            style={styles.buttonPage}
                            onPress={()=>onPageChange(page)}
                        >
                            <Text style={styles.textItem}>{page}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default PagePicker;