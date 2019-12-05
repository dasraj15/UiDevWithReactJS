import React from 'react';
import {Paper,Tabs, Tab} from '@material-ui/core';


export default ({muscles})=>
<Paper>
  <Tabs
    value={1}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
    <Tab label="All"/>
    {muscles.map(group=><Tab label={group} />)}
  </Tabs>
</Paper>