import React from 'react';
import Cocktails from '@/components/Cocktails';

function CocktailsTypes({ cocktailsTypes }: any) {
    return (
        cocktailsTypes.map((cocktailsType: any) => {
            const { groups } = cocktailsType;

            return (
                groups.map((group: any) => {
                    const { subId, items, name } = group;

                    return (
                        <div key={subId} className="mt-10">
                            <h3 className="font-bold text-3xl mb-6">{name.ua}</h3>

                            <Cocktails key={subId} cocktailsItems={items} />
                        </div>
                    );
                })
            );
        })
    );
}
export default CocktailsTypes;
