import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp/presets/all";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";
import { constructor } from "react";

// Class Services
// export default class SPService {

//     constructor(private context: WebPartContext | ApplicationCustomizerContext) {
//         sp.setup({
//             spfxContext: this.context
//         });
//     }

//     public async getAllListItems(): Promise<any[]> {
//         try {
//             debugger;
//             const items: any[] = await sp.web.lists.getByTitle("Contacts").items.top(5).get();
//             return items;
//         }
//         catch (error) {
//             console.error(error);
//             return [];
//         }
//     }

// }
export const SPService = (spContext: WebPartContext) => {

    /**
     *
     */
    constructor();
    {
        sp.setup({
            spfxContext: spContext
        });
    }

    const getAllListItems = async () => {

        try {
            debugger;
            const items: any[] = await sp.web.lists.getByTitle("Contacts").items.top(5).get();
            return items;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    };

    const updateListItem = async (itemId, data) => {

        try {

            let list = sp.web.lists.getByTitle("Contacts");
            const response = await list.items.getById(itemId).update(data);
            debugger;
            return response;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    };

    return { getAllListItems, updateListItem };

};