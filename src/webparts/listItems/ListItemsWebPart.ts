import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ListItemsWebPartStrings';

import { IRootComponentProps } from './components/IRootComponentProps';
import { sp } from "@pnp/sp/presets/all";
import RootComponent from './components/RootComponent';


export interface IListItemsWebPartProps {
  description: string;
}

export default class ListItemsWebPart extends BaseClientSideWebPart <IListItemsWebPartProps> {

  public async onInit(): Promise<void> {

    const _ = await super.onInit();
    // other init code may be present
    sp.setup({
      spfxContext: this.context
    });
  }

  public render(): void {
    const element: React.ReactElement<IRootComponentProps> = React.createElement(
      RootComponent,
      {
        description: this.properties.description,
        spContext : this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
