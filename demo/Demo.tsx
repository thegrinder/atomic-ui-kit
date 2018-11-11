/* tslint:disable */ 
import * as React from 'react';
import { FaAmazonPay } from 'react-icons/fa';
import styled, { ThemeProvider } from 'styled-components';
import {
  Button,
  Checkbox,
  ColorBox,
  getBoxBgColor,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  InlineInput,
  Input,
  Link,
  List,
  ListItem,
  Paragraph,
  PlainButton,
  Radio,
  Select,
  Span,
  Spinner,
  Textarea,
  theme as atomicUiKitTheme,
  Toggle,
} from '../src/index';
import '../src/tachyons/tachyons.scss';
import { render } from 'react-dom';

const IconWrapper = styled.span`
  vertical-align: middle;
  line-height: 0;
  display: inline-block;
  margin: 0 15px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin: 0 15px;
  background-color: ${({ theme }) => getBoxBgColor(theme, 'primary')};
`;

const handleChange = e => alert(e.target.checked);

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={atomicUiKitTheme}>
        <div className="pa4">
          <div className="pa4">
            <ColorBox
              bgColor="lightPrimary"
              borderColor="primary"
              className="pa4"
            />
          </div>
          <div className="mb4">
            <H1 sizing="h1">Heading</H1>
            <H2 sizing="h2">Heading</H2>
            <H3 sizing="h3">Heading</H3>
            <H4 sizing="h4">Heading</H4>
            <H5 sizing="h5">Heading</H5>
            <H6 sizing="h6">Heading</H6>
          </div>
          <div className="mb4">
            <Paragraph sizing="large">Large paragraph</Paragraph>
            <Paragraph>Medium paragraph</Paragraph>
            <Paragraph sizing="small">Small paragraph</Paragraph>
            <Paragraph colour="lightest">Lightest Paragraph</Paragraph>
            <Paragraph colour="light">Light Paragraph</Paragraph>
            <Span>Span</Span>
          </div>
          <div className="mb4">
            <List>
              <ListItem>List Item</ListItem>
              <ListItem>List Item</ListItem>
            </List>
          </div>
          <div className="mb4">
            <Button btnType="default">Default</Button>
            <Button btnType="primary">Primary</Button>
            <Button btnType="secondary">Secondary</Button>
            <Button btnType="danger">Danger</Button>
            <Button submitting={true} btnType="primary">submitting</Button>
          </div>
          <div className="mb4">
            <Button btnType="default" btnSize="small">
              Small
            </Button>
            <Button btnType="primary" btnSize="default">
              Default
            </Button>
            <Button btnType="secondary" btnSize="large">
              Large
            </Button>
          </div>
          <div className="mb4">
            <Button left={<Circle />}>Icon Button</Button>
          </div>
          <div className="mb4">
            <Button
              btnType="primary"
              right={<IconWrapper><FaAmazonPay size={24} /></IconWrapper>}
            >
              Icon Button
            </Button>
          </div>
          <div className="mb4">
            <PlainButton>Plain Button</PlainButton>
          </div>
          <div className="mb4">
            <Link linkType="default">Default Link</Link>
            <Link linkType="muted">Muted Link</Link>
          </div>
          <div className="mb4">
            <Spinner color="#ddd" size={30} />
          </div>
          <div className="w-50 mb4">
            <Input invalid={false} value="Valid" />
          </div>
          <div className="w-50 mb4">
            <Input invalid={true} value="Invalid" />
          </div>
          <div className="w-50 mb4">
            <InlineInput
              disabled={false}
              submitting={false}
              invalid={false}
              value="Valid inline"
            />
          </div>
          <div className="w-50 mb4">
            <InlineInput
              disabled={true}
              submitting={false}
              invalid={true}
              value="Invalid inline"
            />
          </div>
          <div className="w-50 mb4">
            <InlineInput
              disabled={true}
              submitting={true}
              invalid={false}
              value="Submitting inline"
            />
          </div>
          <div className="w-50 mb4">
            <Select>
              <option>Option one</option>
              <option>Option two</option>
            </Select>
          </div>
          <div className="w-50 mb4">
            <Textarea rows={5} />
          </div>
          <div className="w-50 mb4">
            <Radio />
            <Radio />
          </div>
          <div className="w-50 mb4">
            <Checkbox id="bla" />
            <Checkbox />
          </div>
          <div>
            <Toggle onChange={handleChange} />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
