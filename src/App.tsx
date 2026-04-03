import { QueryClient } from "@tanstack/react-query";
import Projects from "./components/Projects";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Flex, Layout, Menu, type MenuProps, theme } from "antd";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    }
  },
});

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
});

const { Header, Content, Footer } = Layout;

const menuItems: Required<MenuProps>['items'][number][] = [];

const App = () => {
  const { token: {
    padding
  } } = theme.useToken();

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <Layout style={{ height: "100vh" }}>
        <Header>
          <Menu selectable={false} theme="dark" mode="horizontal" items={menuItems} />
        </Header>
        <Content style={{ height: "100%", padding }}>
          <Flex justify="center">
            <Projects />
          </Flex>
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </PersistQueryClientProvider>
  );
};

export default App;
