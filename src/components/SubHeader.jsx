import React from 'react';
import { VtmnTabs, VtmnTabsItem } from '@vtmn/react';

const SubHeader = () => {
    return (
        <div className="SubHeader" style={{ width: '100vw'}}>
            <VtmnTabs
                align="center"
                aria-label="Tabs list"
                size="medium"
            >
                <VtmnTabsItem>
                    Sports
                </VtmnTabsItem>
                <VtmnTabsItem>
                    Femme
                </VtmnTabsItem>
                <VtmnTabsItem>
                    Homme
                </VtmnTabsItem>
                <VtmnTabsItem>
                    Enfant
                </VtmnTabsItem>
                <VtmnTabsItem>
                    Équipement
                </VtmnTabsItem>
                <VtmnTabsItem>
                    Nutrition et santé
                </VtmnTabsItem>
                <VtmnTabsItem>
                    <span style={{ color: '#4D6F56' }}>Seconde vie</span>
                </VtmnTabsItem>
                <VtmnTabsItem>
                    <span style={{ color: '#E32630' }}>Bons plans</span>
                </VtmnTabsItem>
                <VtmnTabsItem>
                    Services
                </VtmnTabsItem>
            </VtmnTabs>
        </div>
    );
}

export default SubHeader;