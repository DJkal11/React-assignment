import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";

import Card from "../Card"

afterEach(() => {
  cleanup()
})

test('should render Card', () => {
    const fakeData = {"blocks_url":"https://courses.edx.org/api/courses/v2/blocks/?course_id=ccx-v1%3Aadam%2BMac_APccx%2Be0d%2Bccx%403","effort":"2:00","end":null,"enrollment_start":"2015-07-21T10:00:00Z","enrollment_end":"2016-06-29T10:00:00Z","id":"ccx-v1:adam+Mac_APccx+e0d+ccx@3","media":{"banner_image":{"uri":"/asset-v1:adam+Mac_APccx+e0d+type@asset+block@images_course_image.jpg","uri_absolute":"https://courses.edx.org/asset-v1:adam+Mac_APccx+e0d+type@asset+block@images_course_image.jpg"},"course_image":{"uri":"/asset-v1:adam+Mac_APccx+e0d+type@asset+block@Davidson_EdX-68_1_.png"},"course_video":{"uri":"http://www.youtube.com/watch?v=sAnHwOL8aAs"},"image":{"raw":"https://courses.edx.org/asset-v1:adam+Mac_APccx+e0d+type@asset+block@Davidson_EdX-68_1_.png","small":"https://courses.edx.org/asset-v1:adam+Mac_APccx+e0d+type@thumbnail+block@Davidson_EdX-68_1_-png-375x200.jpg","large":"https://courses.edx.org/asset-v1:adam+Mac_APccx+e0d+type@thumbnail+block@Davidson_EdX-68_1_-png-750x400.jpg"}},"name":"ntest","number":"Mac_APccx","org":"adam","short_description":"","start":"2016-06-27T14:10:44Z","start_display":"June 27, 2016","start_type":"timestamp","pacing":"instructor","mobile_available":false,"hidden":false,"invitation_only":false,"course_id":"ccx-v1:adam+Mac_APccx+e0d+ccx@3"};
    render(<Card info={fakeData}/>)
    
})

test("Card includes correct html innerText", () => {
    const fakeData = {"blocks_url":"https://courses.edx.org/api/courses/v2/blocks/?course_id=ccx-v1%3Aadam%2BMac_APccx%2Be0d%2Bccx%403","effort":"2:00","end":null,"enrollment_start":"2015-07-21T10:00:00Z","enrollment_end":"2016-06-29T10:00:00Z","id":"ccx-v1:adam+Mac_APccx+e0d+ccx@3","media":{"banner_image":{"uri":"/asset-v1:adam+Mac_APccx+e0d+type@asset+block@images_course_image.jpg","uri_absolute":"https://courses.edx.org/asset-v1:adam+Mac_APccx+e0d+type@asset+block@images_course_image.jpg"},"course_image":{"uri":"/asset-v1:adam+Mac_APccx+e0d+type@asset+block@Davidson_EdX-68_1_.png"},"course_video":{"uri":"http://www.youtube.com/watch?v=sAnHwOL8aAs"},"image":{"raw":"https://courses.edx.org/asset-v1:adam+Mac_APccx+e0d+type@asset+block@Davidson_EdX-68_1_.png","small":"https://courses.edx.org/asset-v1:adam+Mac_APccx+e0d+type@thumbnail+block@Davidson_EdX-68_1_-png-375x200.jpg","large":"https://courses.edx.org/asset-v1:adam+Mac_APccx+e0d+type@thumbnail+block@Davidson_EdX-68_1_-png-750x400.jpg"}},"name":"ntest","number":"Mac_APccx","org":"adam","short_description":"","start":"2016-06-27T14:10:44Z","start_display":"June 27, 2016","start_type":"timestamp","pacing":"instructor","mobile_available":false,"hidden":false,"invitation_only":false,"course_id":"ccx-v1:adam+Mac_APccx+e0d+ccx@3"};
    render(<Card info={fakeData}/>)
    const headerComponent = screen.getByText("ntest");
    expect(headerComponent).toHaveTextContent("ntest");
})

test("renders Card snapshot", () => {
    const newElement = renderer.create(<Card/>).toJSON();
    expect(newElement).toMatchSnapshot();
})