import { getPrivacyContent } from '@/lib/db';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata = {
    title: '隐私政策 | 圣唐科技',
};

export default function PrivacyPage() {
    const customContent = getPrivacyContent();

    if (customContent) {
        return (
            <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">圣唐科技基本功能隐私政策</h1>
                    <div className="prose prose-slate max-w-none text-slate-700 space-y-6" dangerouslySetInnerHTML={{ __html: customContent }} />

                    <div className="mt-12 text-center">
                        <Link href="/">
                            <Button className="bg-brand-gold hover:bg-yellow-600 text-white px-12 py-6 text-lg rounded-full">
                                我知道了
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">圣唐科技基本功能隐私政策</h1>

                <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
                    <p>
                        尊敬的圣唐科技用户：我们对《圣唐科技基本功能隐私政策》进行了更新，主要补充圣唐科技网站在保障信息咨询安全场景中收集使用的字段。
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h2 className="text-lg font-bold text-blue-900 mb-2">【特别提示】</h2>
                        <p className="text-sm text-blue-800">
                            本政策仅适用于北京圣唐科技有限公司（包括但不限于，以下或称“我们”或“圣唐科技”）提供的产品和服务及其延伸的功能（以下简称“圣唐科技服务”），包括圣唐科技APP、网站、客户端、小程序以及随技术发展出现的新形态向您提供的各项产品和服务。
                        </p>
                    </div>

                    <p>
                        如我们提供的某款产品有单独的隐私政策或相应的用户服务协议当中存在特殊约定，则该产品的隐私政策将优先适用，该款产品隐私政策和用户服务协议未涵盖的内容，以本政策内容为准。如我们关联公司的产品或服务中使用了圣唐科技提供的产品或服务但未设置独立隐私政策的，则本隐私政策同样适用于该部分产品或服务。
                    </p>

                    <p className="font-bold">
                        请仔细阅读《圣唐科技基本功能隐私政策》（尤其是粗体内容）并确定了解我们对您个人信息的处理规则。阅读过程中，如您有任何疑问，可通过《圣唐科技基本功能隐私政策》中的联系方式咨询我们。
                    </p>

                    <p>
                        当您位于欧盟（European Union）、欧洲经济区（the European Economic Area）、英国和瑞士从圣唐科技购买商品或服务时，在您“提交订单、新增及修改地址”前请仔细阅读 “欧洲地区政策”。
                    </p>

                    <p>
                        圣唐科技网站属于网上咨询类产品，您同意本隐私政策仅代表您知悉和同意使用网上咨询时我们收集、处理相关必要信息，不代表您同意我们收集、处理非必要个人信息。
                    </p>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">联系我们</h3>
                        <p>如您有任何疑问、意见或建议，您可通过以下联系方式与我们联系：</p>
                        <ul className="list-none space-y-2 mt-2">
                            <li><strong>联系电话：</strong>18701319280</li>
                            <li><strong>联系邮箱：</strong>toming300@163.com</li>
                            <li><strong>注册地址：</strong>北京市石景山区鲁谷路74号院39号楼3层303-09</li>
                            <li><strong>常用办公地址：</strong>北京市昌平区景大空间</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/">
                            <Button className="bg-brand-red hover:bg-red-700 text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                                我知道了
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
