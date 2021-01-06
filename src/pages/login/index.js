import React, { Component } from 'react';
import './index.less';
import bg1 from "../../assets/img/1.jpg";
import bg2 from "../../assets/img/2.jpg";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liNode: [],
            textListCopy: [
                {
                    text: "",
                    textArr: "我最幸福的事情，是我在最美丽的时刻遇见了你。让你出现在了我的生命里，让我知道世间有那样一个人可以让我义无反顾，即使与全世界为敌也在所不惜。"
                },
                {
                    text: "",
                    textArr: "平淡的一月，每天重复着用不疲倦的日常，爱着你。你依旧是那么的美丽动人，和你在一起的每一天都是那么的轻松愉快，喜欢看着你，想着你，在能看见你的地方，我用眼睛看着你；在看不到你的地方，我用心盯着你。"
                },
                {
                    text: "",
                    textArr: "想你的时候，把你的名字写在手心，摊开是思念，握紧是牵挂。想你的时候，把你的容颜画在纸上，想你是快乐，念你是幸福。我想你，在思念的这一头，我想你，在我思念的那一头"
                },
                {
                    text: "",
                    textArr: "度日如年的二月，玲珑骰子安红豆，入骨相思知不知。相隔两地的我和你，深深的思念。"
                },
                {
                    text: "",
                    textArr: "思念，是张纠结的网心甘情愿，被你困在网中央，只为锁住你的眼光，含情脉脉地久长，你俘获了我的心，未曾做过任何反抗。"
                },
                {
                    text: "",
                    textArr: "相隔两地的二月，因为疫情你和我倍感思念。在这期间你又为回家而开心，也为我没有对你的关爱，没有带你出去玩而生气，很不想让你哭，可是自己总是不争气，虽然最后哄好了你，你也答应叫我老公了。喜欢你开心的每天，会努力让你开心每一天。"
                },
                {
                    text: "",
                    textArr: "在以后的日子里还是不要让你不开心，你的哭让我很难过，很心疼。"
                },
                {
                    text: "",
                    textArr: "所有的悲伤，都是你的伤心，所有的惆怅，都是你的难过，所有的相思，都是对你的沉迷，都是因为你，所有的幸福和快乐，也都是因为你。我爱你"
                },
                {
                    text: "",
                    textArr: "微起波澜的三月，三月的上旬伴随着思念，三月的下旬伴随着相见和甜蜜。在这个三月相思到相见再到短暂的分别，宝贝牙龈出血了，陪着宝贝去看了下，宝贝的同事来暂住了一段时间我不得不短暂的离开一段时间，宝贝这段时间不开心，因为每天上班还要给同事做饭，心疼宝贝。"
                },
                {
                    text: "",
                    textArr: "金风玉露一相逢，便胜却、人间无数。"
                },
                {
                    text: "",
                    textArr: "柔情似水，佳期如梦，忍顾鹊桥归路。"
                },
                {
                    text: "",
                    textArr: "两情若是久长时，又岂在、朝朝暮暮。"
                },
                {
                    text: "",
                    textArr: "波澜的四月，和宝贝的短暂分别之后，回归了我和你的二人世界，在这个月我们吵架了，在我的认知中我们吵架了，因为我心情或者别的什么原因，让我欺负了你，让你受到了委屈，当我看到你哭泣时，我深深的感受到了自己的愧疚和悲伤。以后的日子会努力克制自己，怎么舍得让一个爱你的人伤心呢。"
                },
                {
                    text: "",
                    textArr: "很久前，我不认识你，你不认识我，我们行走在不同的道路上。后来，我们相识了，我们擦肩，没有错过，而是牵手，相爱，走到了一起。珍惜，相守。",
                },
                {
                    text: "",
                    textArr: "平淡而对自己失望的五六七月，我换了工作，心思沉闷，在这五六七月宝贝一直陪着我，没有哭没有闹，我对自己很失望，在这段时间中没有关心宝贝，庆幸的是，我进行了深刻的反思。"
                },
                {
                    text: "",
                    textArr: "我是一朵雪花翩翩在半空里潇洒，我要认清方向，飘呀飘呀，不去那冷寞的幽谷，不去那凄清的山麓，也不去荒街去惆怅，而我是来爱你，永远和你在一起。花开定有郎君赏，岂能佳人自芬芳，几度风霜雪雨冷，化作满园春色香，吾幸能与你为伴，解除忧思百年长。爱你，就给你一个崭新的世界，不辜负你的期望"
                },
                {
                    text: "",
                    textArr: "拥有你，是我最美的人生传奇。"
                },
                {
                    text: "",
                    textArr: "喜欢你的笑容，喜欢静静的看着你，我的忧愁像云一般一下子就飞去了。"
                },
                {
                    text: "",
                    textArr: "爱情是什么颜色的"
                },
                {
                    text: "",
                    textArr: "我说是粉色的，拥有爱情，就拥有粉色的回忆。在炎热的八月，因为弟弟的到来我和你短暂的分别，这一个月我的思念如同这炙热的阳光无处不在的思念你。"
                },
                {
                    text: "",
                    textArr: "烦恼的九月和焦虑的十月，我终于回到了你身边，可是回来后你总是不开心，不快乐，在工作中你受到了很多的外界影响，很多很多的因素在不停的袭击着你，而你的心太过温柔，太过怜悯，如同傻瓜一样不懂得防御和保护自己，任由这些有害无害，有利无理的因素对你造成伤害，我想要保护你，而我太爱你，舍不得去教育你，我只能在你身边陪着你，让这些经历来让你成长。"
                },
                {
                    text: "",
                    textArr: "最后的最后，我始终在你身边，在你身边抱着你。"
                },
                {
                    text: "",
                    textArr: "人生路上，可能春风得意，也可能坎坷不平，无论如何，我们都要一直走下去。荣耀也罢，屈辱也罢，都要以平和的心态去面对，少一些无奈与感慨，多一份从容和淡然。宠辱不惊，闲看庭前花开花落。去留无意，静观天上云卷云舒。把心放平，生活就是一泓平静的水。把心放轻，人生就是一朵自在的云。"
                },
                {
                    text: "",
                    textArr: "有点变化的十一月，我们搬了新的房子，生活总归是有所变化，你的心情也在慢慢变好，日子总是在平静中让平复自己的心情，未来总归是好的，、有你，再苦的生活也不觉累；有你，再大的险阻也无所畏；有你，再大的波折也不担忧；有你，就拥有了全世界。"
                },
                {
                    text: "",
                    textArr: "有些事，轻轻放下，未必不是轻松；有些人，深深记住，未必不是幸福；有些痛，淡淡看开，未必不是历练。"
                },
                {
                    text: "",
                    textArr: "变化的十二月，你提了辞职，每个人总要经历些许事情，才会快速成长，风雨总是时常伴随，但阳光总会到来，风雨无阻嘛，这个月对你说的最多的就是，我会一直在。"
                },
                {
                    text: "",
                    textArr: "我当然会一直在，一直在。"
                },
                {
                    text: "",
                    textArr: "我爱你，不仅因为你的样子，还因为，和你在一起时，我的样子。"
                },
                {
                    text: "",
                    textArr: "每天早上醒来，看见你和阳光都在，这就是我想要的未来。"
                },
                {
                    text: "",
                    textArr: "生死轮回芸芸众生万千生灵演绎大千世界没你我的人生岂会精彩"
                },
                {
                    text: "",
                    textArr: "我爱你"
                },
                {
                    text: "",
                    textArr: "只想和你在一起。"
                },
                {
                    textArr: "敬：亲爱的宝贝"
                }
            ],
            textTimer: null
        };

    }
    componentDidMount() {
        this.itemLiFun()
    }
    itemLiFun() {
        let self = this
        let i = 0
        let textTimer = setInterval(function () {
            if (self.state.textListCopy.length === i) {
                clearInterval(textTimer)
                return;
            }
            const liNodeFris = [...self.state.liNode];
            let item = {
                text: self.state.textListCopy[i].textArr
            }
            const liNode = self.renderItemLi(item, i);
            liNodeFris.push(liNode);
            self.setState({
                liNode: liNodeFris
            })
            if (self.textEnd) {
                const scrollHeight = self.textEnd.scrollHeight;
                const height = self.textEnd.clientHeight;
                const maxScrollTop = scrollHeight - height;
                self.textEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
            }
            i++;
        }, 1500);
    }
    renderItemLi = (item, index) => {
        return <li className={["item_li", item.text == '敬：亲爱的宝贝' ? 'item_li_end' : ''].join(' ')} key={index}>{item.text}</li>
    }
    render() {
        return (
            <div className="text_box" >
                <div className="text_bg" ref={(el) => { this.textEnd = el; }}>
                    <div className="text_title shake shake-hard fcc">花卷的这一年</div>
                    <ul className="item_ul">
                        {this.state.liNode}
                    </ul>
                    <div className="text_px"></div>
                </div>
                <img className="bg_1" src={bg1} alt="" />
            </div>
        );
    }
}


export default index;