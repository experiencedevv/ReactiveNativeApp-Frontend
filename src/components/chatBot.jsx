import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `

  <script
  src="https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.7/dist/build/static/js/bundle.min.js">
</script>
  <langflow-chat
    window_title="ChatBot - langflow"
    flow_id="d4f669f9-becb-464b-8e77-7be9463af8db"
    host_url="https://astra.datastax.com">
</langflow-chat>





`
};

export default function hatBot() {
  const { width } = useWindowDimensions();
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
    />
  );
}