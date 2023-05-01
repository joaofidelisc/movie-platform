import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './PagePickerStyles';

interface PagePickerProps {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void,
} 

function PagePicker({currentPage, totalPages, onPageChange}: PagePickerProps){
    const [pages, setPages] = useState(() => {
    
        const initialPages = [];
            for (let i = 0; i < 5; i++) {
                initialPages.push(currentPage + i + 1);
            }
        return initialPages;
    });
    
    useEffect(()=>{
        if (currentPage > pages[2]){
            if (currentPage + 3 >= totalPages){
                setPages(()=>{
                    const newPages = [];
                    for (let i = 5; i > 0; i--){
                        newPages.push(totalPages - i);
                    }
                    return newPages;
                });
            }else{
                setPages(()=>{
                    const newPages = [];
                    for (let i = 0; i < 5; i++){
                        newPages.push(currentPage + i);
                    }
                    return newPages;
                });
            }
        }
        
        else if (currentPage == 1){
            setPages(()=>{
                const newPages = [];
                for (let i = 0; i < 5; i++){
                    newPages.push(currentPage + i + 1);
                }
                return newPages;
            });
        }
    }, [currentPage])
    
    return(
        <View style={styles.viewContainer}>
            <View style={styles.viewButtons}>
                {
                    currentPage === 1?
                    <TouchableOpacity
                        style={styles.selectedButton}
                        onPress={()=>onPageChange(1)}
                    >
                        <Text style={styles.textSelectedItem}>1</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity
                        style={styles.buttonPage}
                        onPress={()=>onPageChange(1)}
                    >
                        <Text style={styles.textItem}>1</Text>
                    </TouchableOpacity>
                }
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
                  {
                    currentPage === totalPages?
                    <TouchableOpacity
                        style={styles.selectedButton}
                        onPress={()=>onPageChange(totalPages)}
                    >
                        <Text style={styles.textSelectedItem}>{totalPages}</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity
                        style={styles.buttonPage}
                        onPress={()=>onPageChange(totalPages)}
                    >
                        <Text style={styles.textItem}>{totalPages}</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default PagePicker;