import World from "./components/World";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";

const supportedChains = ["4"];

function App() {
	const { isWeb3Enabled, chainId } = useMoralis();
	return (
		<div>
			<div className="float-right py-2 px-4 pr-10">
				<ConnectButton moralisAuth={false} />
			</div>

			{isWeb3Enabled ? (
				<div>
					{supportedChains.includes(parseInt(chainId).toString()) ? (
						<div className="App">
							<World />
						</div>
					) : (
						<div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
					)}
				</div>
			) : (
				<div>Please connect to a Wallet</div>
			)}
		</div>
	);
}

export default App;
