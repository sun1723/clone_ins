import React from 'react';
import LandMarkCard from "../LandMarkCard";
import List from "../List";
import { mockLandMarkListResponse } from "./__data__/mock-lanmark-list-response";

const LandMarkList = () => {
  const child = mockLandMarkListResponse.map((item,i) =><LandMarkCard key={i} item={item} />)

  const header = <div> Total 3 search results</div>
  return (
    <List>{header}{child}</List>
  )
}

export default LandMarkList;