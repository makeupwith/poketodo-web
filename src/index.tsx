import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './modules';
// import reportWebVitals from './reportWebVitals';
import './index.css';

// *ISSUE ケツに論理演算子の否定の"!"が着いている意味が分からない、consoleで着いているものと着いていないものを比較したが差が見られなかった
const root = createRoot(document.getElementById('root')!)

// React.StrictMode：JSのStrict Modeと同様にコードが厳格にエラーチェックされる
// Provider：ProviderでネストされたコンポーネントがStoreを参照できるようにするため
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// アプリのパフォーマンスを測定したい場合 Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
