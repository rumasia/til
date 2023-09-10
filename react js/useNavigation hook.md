A hook provided by react-router-dom which helps us to find out whether we are in active transiton state,in loading data or no active transiton state
useNavigation hook hs certin properties but state is most important of them which tells us about state.

```
import {useNavigtion} from 'react-router-dom';
```

```
const navigation=useNavigation();
navigation.state === 'loading/idle/submiting'
```
