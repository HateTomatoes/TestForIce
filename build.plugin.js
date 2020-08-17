/**
 * Created by 讨厌西红柿 on 2020-05-25
 **/
module.exports = ({  onGetWebpackConfig, context }) => {
    onGetWebpackConfig((config) => {
        // 通过 webpack-chain 形式修改 webpack 配置
        // config.devServer.hot(true);

        const { command, commandArgs } = context;
        const mode = commandArgs.mode || command;
        console.log('mode = ', mode);

        config.plugin('DefinePlugin')
        // 第一项为具体插件，第二项为插件参数
            .tap(args => {
                console.log('args:',args);
                // 根据需求返回 WebpackPluginImport 插件构造函数的参数
                return [{...args,
                    // 此处不能省略 JSON.stringify，否则构建过程会出现语法问题
                    IS_DEBUG: command !== "build"
                }];
            });

        // 执行 ice-scripts build 命令时
        // if (command === 'build') {
        //     config.optimization.minimize(true);
        //     config.optimization
        //         .minimizer('UglifyJsPlugin')
        //         .tap(options => {
        //             let compress = options[0].uglifyOptions.compress;
        //             compress.drop_console = true;
        //             compress.drop_debugger = true;
        //             console.log('options:', options)
        //             return options;
        //         });
        //
        //     {//修改打包的名称
        //         config.output.filename(path.join('js', '[name].[chunkhash:8].js'));
        //         config.plugin('MiniCssExtractPlugin').tap((args) => [Object.assign(...args, {
        //             filename: path.join('css', '[name].[contenthash:8].css'),
        //         })]);
        //     }
        //
        // }
    });
};