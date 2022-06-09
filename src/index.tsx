import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import App from './modules';
// import reportWebVitals from './reportWebVitals';
import './index.css';
import { RecoilRoot } from 'recoil'


// *ISSUE ケツに論理演算子の否定の"!"が着いている意味が分からない、consoleで着いているものと着いていないものを比較したが差が見られなかった
const root = createRoot(document.getElementById('root')!)

// React.StrictMode：JSのStrict Modeと同様にコードが厳格にエラーチェックされる
// Provider：ProviderでネストされたコンポーネントがStoreを参照できるようにするため
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
);

// アプリのパフォーマンスを測定したい場合 Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
