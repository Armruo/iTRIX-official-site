import IndexBtn from '@/components/IndexBtn';
import {
  Address,
  Connector,
  type ConnectorTriggerProps,
} from '@ant-design/web3';
import { Button, Popconfirm } from 'antd';
import React from 'react';

interface Props {
  style?: React.CSSProperties;
  size?: 'small';
}

const MyConnectButton: React.FC<ConnectorTriggerProps & Props> = ({
  size,
  style,
  onDisconnectClick,
  onConnectClick,
  loading,
  account,
}) => {
  if (account && !loading) {
    return (
      <div style={{ position: 'relative' }}>
        <Popconfirm
          title="Are you sure you want to disconnect?"
          onConfirm={async () => {
            onDisconnectClick?.();
          }}
        >
          <Button title={account?.address} color="blue" shape="round">
            {account?.name || <Address ellipsis address={account.address} />}
          </Button>
        </Popconfirm>
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', ...style }}>
      <IndexBtn
        height={size === 'small' ? '40px' : '52px'}
        fontSize={size === 'small' ? '16px' : '20px'}
        size={size}
        onClick={onConnectClick}
      >
        {loading
          ? "Connecting..."
          : "Connect Wallet"}
      </IndexBtn>
    </div>
  );
};

const ConnectWallet: React.FC<Props> = ({ style, size }) => {
  return (
    <Connector
      modalProps={{
        footer: (
          <>
            Powered by{' '}
            <a href="https://web3.ant.design/" target="_blank" rel="noreferrer">
              Ant Design Web3
            </a>
          </>
        ),
      }}
    >
      <MyConnectButton style={style} size={size} />
    </Connector>
  );
};

export default ConnectWallet;
