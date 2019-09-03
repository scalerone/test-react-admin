import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {
    Form,
    Input,
    Icon,
    Button,message
} from 'antd'
import './login.less'
import logo from '../../assets/images/logo.svg'
const Item = Form.Item
/*
登录组件
*/
class LoginForm extends Component {

    handleSubmit = (event) => {
        // 阻止事件的默认行为
        event.preventDefault()
        // 对所有表单字段进行检验
        this.props.form.validateFields(async (err, values) => {
            // 检验成功
            if (!err) {

                const {username, password} = values
                console.log('提交登录请求', username, password)
                if (username === 'admin' && password === '123456') {
                    // 提示登录成功
                    window.localStorage.setItem('loggedIn', true);
                    message.success('登录成功')
                    // 跳转到管理界面 (不需要再回退回到登陆)
                    window.location.href = '/#/';
                    // this.props.history.replace('/')
                } else { // 登录失败
                    // 提示错误信息
                    message.error('登录失败：帐号与密码不正确')
                }

            } else {
                console.log('检验失败!'+err)
            }
        });
        // 得到form对象
        // const form = this.props.form
        // // 获取表单项的输入数据
        // const values = form.getFieldsValue()
        // console.log('handleSubmit()', values)
    }

    /*
 对密码进行自定义验证
 */
    /*
     用户名/密码的的合法性要求
       1). 必须输入
       2). 必须大于等于4位
       3). 必须小于等于12位
       4). 必须是英文、数字或下划线组成
      */
    validatePwd = (rule, value, callback) => {
        console.log('validatePwd()', rule, value)
        if(!value) {
            callback('密码必须输入')
        } else if (value.length<4) {
            callback('密码长度不能小于4位')
        } else if (value.length>12) {
            callback('密码长度不能大于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文、数字或下划线组成')
        } else {
            callback() // 验证通过
        }
        // callback('xxxx') // 验证失败, 并指定提示的文本
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div >
                <section className='login-content'>
                    <h3>用户登陆</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                /*
                            getFieldDecorator 是一个高阶函数(返回值是一个函数)
                            getFieldDecorator(标识名称， 配置对象)(组件标签) 返回新的标签
                            经过 getFieldDecorator 包装的表单控件会自动添加 value 和 onChange， 数据同步
                            将被 form 接管
                             */
                            }
                            {
                                getFieldDecorator('username', { // 配置对象: 属性名是特定的一些名称
                                    // 声明式验证: 直接使用别人定义好的验证规则进行验证
                                    rules: [
                                        { required: true, whitespace: true, message: '用户名必须输入' },
                                        { min: 4, message: '用户名至少4位' },
                                        { max: 12, message: '用户名最多12位' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                                    ],
                                    initialValue: 'admin', // 初始值
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            validator: this.validatePwd
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }

                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}
/*
包装Form组件生成一个新的组件: Form(Login)
新组件会向Form组件传递一个强大的对象属性: form
 */
 LoginForm = Form.create()(LoginForm)

class Login extends Component {

    render() {
        const loggedIn = window.localStorage.getItem('loggedIn');
        // 如果内存没有存储user ==> 当前没有登陆
        if(loggedIn) {
            // 自动跳转到登陆(在render()中)
            return <Redirect to='/'/>
        }
        return (
                <div className='login'>
                    <header className='login-header'>
                        <img src={logo} alt="logo"/>
                        <h1>React admin后台管理系统</h1>
                    </header>
                    <LoginForm />
                </div>
        );
    }
}

export default Login;





