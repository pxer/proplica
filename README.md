**NOTE**: this project is WIP;



## Usage

```javascript
import style from 'proplica';

export const Btn = style`
	color: white;
`;
```



# Error

1. can't resolve `px`, `em`



## TODO

1. style extend

   ```javascript
   import style from 'proplica';

   export const BaseBtn = style`
   	color: white;
   `;

   export const PrimaryBtn = BaseBtn.extend`
   	color: pink;
   `;
   ```
