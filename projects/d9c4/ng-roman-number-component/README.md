# NgRomanNumbersComponent

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

**NgRomanNumbers** is a simple and easy to use Angular component that shows the given nuber in Roman numerals.
This library is based on [typescript-roman-numbers-converter](https://www.npmjs.com/package/typescript-roman-numbers-converter).
## Installation

```shell
$ npm i @d9c4/ng-roman-numbers-component
  ```

## How to use it

First import the NgRomanNumberComponentModule into your app module:

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRomanNumberComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, you can freely use the component by adding it to your template:
```html
<roman-number-component [numeral]="1350021" [isRomanFontEnabled]="false"></roman-number-component>
```
The component takes the following input parameters:
<br>
**numeral**: The number to be converted to Roman numerals. At the moment only positive integer numbers between 1 and 4 millions are supported and tested.
<br>
**isRomanFontEnabled**: If true, the component will use a serif font in order to give you fancy Roman numerals. If false, the component will not force any font style. The default value is true.

## Example
The following screenshot shows two instances of component in action wrapping them around an **h2** tag with the default style of the App Component created by Angular:
<br>
![img.png](img.png)
<br>
The numeral parameter is set to **1350021** for both components. The **isRomanFontEnabled** parameter is set to **false** for the first component.

#Other features
The current release of this library is the first release of this library. The module is still in development and the API is subject to change. 
<br>
The library exports the class RomanNumber, the same used in the component and in **typescript-roman-numbers-converter**.
<br>
The library also exports the following methods with the same implementation as the original **typescript-roman-numbers-converter**:
- toRoman(num: number): string
- toArabic(num: string): number
- toRomanLarge(num: number): RomanNumeral
- toRomanLargeStr(num: string): string


#License
The following license applies to this library:
MIT License (MIT)