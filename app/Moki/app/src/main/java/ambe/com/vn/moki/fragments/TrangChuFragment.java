package ambe.com.vn.moki.fragments;


import android.app.Dialog;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.ViewFlipper;

import com.squareup.picasso.Picasso;

import java.util.ArrayList;

import ambe.com.vn.moki.R;
import ambe.com.vn.moki.adapters.ListviewAdapter;
import ambe.com.vn.moki.adapters.PagerTrangChuAdapter;
import ambe.com.vn.moki.model.Model_listview_dlg;

/**
 * A simple {@link Fragment} subclass.
 */
public class TrangChuFragment extends Fragment implements View.OnClickListener {


    private View view;
    private ViewPager vPagerTrangChu;
    private TabLayout tableLayoutTrangChu;
    private PagerTrangChuAdapter pagerTrangChuAdapter;
    private ArrayList<String> arrTabs;
    private ViewFlipper viewFlipper;
    private LinearLayout llSapXep;
    private LinearLayout llLoc;
    private LinearLayout llXungQuanh;
    private Dialog dialogSapXep;

    public TrangChuFragment() {
        // Required empty public constructor
    }

    public static TrangChuFragment newInstance() {
        TrangChuFragment trangChuFragment = new TrangChuFragment();
        return trangChuFragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_trang_chu, container, false);

        return view;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        addControls();
        addViewFlipper();
        addEvents();


    }

    private void addViewFlipper() {
        ArrayList<String> urlHinhAnhs = new ArrayList<String>();
        urlHinhAnhs.add("http://diendanso.net/wp-content/uploads/2015/12/anh-dep-17.jpg");
        urlHinhAnhs.add("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNwpPOkNoh7r3sc4X2KKpmZp07bCLZFIBU8WZyDhFNvlOyXjIYg");
        urlHinhAnhs.add("http://taihinhanhdep.xyz/wp-content/uploads/2016/09/hinh-anh-dep-ve-thien-nhien-va-tinh-yeu.jpg");
        urlHinhAnhs.add("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRpc-Ymeo8O-MrkFOCbcjYV5IAhpPKDM4vJbaVzaPQIzxkaDh");
        urlHinhAnhs.add("http://hinhdep.com.vn/wp-content/uploads/2013/06/anh-dep-tinh-ban007.jpg");

        for (String str : urlHinhAnhs) {
            ImageView imageView = new ImageView(getActivity());
            Picasso.with(getActivity()).load(str)
                    .into(imageView);
            imageView.setScaleType(ImageView.ScaleType.FIT_XY);
            viewFlipper.addView(imageView);
        }

        viewFlipper.setFlipInterval(5000);
        viewFlipper.setAutoStart(true);
        Animation animation = AnimationUtils.loadAnimation(getContext(), R.anim.slide_in_right);
        Animation animation1 = AnimationUtils.loadAnimation(getContext(), R.anim.slide_out_right);
        viewFlipper.setInAnimation(animation);
        viewFlipper.setOutAnimation(animation1);


    }

    private void addEvents() {

        vPagerTrangChu.addOnPageChangeListener(new TabLayout.TabLayoutOnPageChangeListener(tableLayoutTrangChu));

        tableLayoutTrangChu.setOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                vPagerTrangChu.setCurrentItem(tab.getPosition());
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {

            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {

            }
        });

        vPagerTrangChu.setPageTransformer(true, new DepthPageTransformer());


        llSapXep.setOnClickListener(this);
        llXungQuanh.setOnClickListener(this);
        llLoc.setOnClickListener(this);

    }


    private void addControls() {
        vPagerTrangChu = view.findViewById(R.id.view_pager_trang_chu);
        tableLayoutTrangChu = view.findViewById(R.id.tab_layout_trang_chu);
        viewFlipper = view.findViewById(R.id.view_flipper);
        llSapXep = view.findViewById(R.id.ll_sap_xep);
        llLoc = view.findViewById(R.id.ll_loc);
        llXungQuanh = view.findViewById(R.id.ll_xung_quanh);


        arrTabs = new ArrayList<>();

        String[] test = getResources().getStringArray(R.array.arrTabs);
        for (int i = 0; i < test.length; i++) {
            arrTabs.add(test[i]);
        }


        for (String str : arrTabs) {
            tableLayoutTrangChu.addTab(tableLayoutTrangChu.newTab().setText(str));
        }
        tableLayoutTrangChu.setTabGravity(TabLayout.GRAVITY_FILL);
        pagerTrangChuAdapter = new PagerTrangChuAdapter(getChildFragmentManager(), arrTabs);
        vPagerTrangChu.setAdapter(pagerTrangChuAdapter);
        pagerTrangChuAdapter.notifyDataSetChanged();


    }

    public ArrayList<String> getArr() {
        return arrTabs;
    }

    @Override
    public void onClick(View view) {
        int idView = view.getId();
        switch (idView) {
            case R.id.ll_sap_xep:
                xuLySapXep();
                break;
            case R.id.ll_loc:
                xuLyLoc();
                break;
            case R.id.ll_xung_quanh:
                xuLyXungQuanh();
                break;



        }
    }

    private void xuLyXungQuanh() {

    }

    private void xuLySapXep() {

        dialogSapXep = new Dialog(getActivity());
        dialogSapXep.setContentView(R.layout.layout_dialog_sap_xep);
        dialogSapXep.setTitle(R.string.sap_xep);


        ListView listSapXep = dialogSapXep.findViewById(R.id.list_sap_xep);
        Button btnHuy =dialogSapXep.findViewById(R.id.btn_huy_sap_xep);
        Button btnAdpDung=dialogSapXep.findViewById(R.id.btn_ap_dung_sap_xep);


        String[] arrSapXep = getResources().getStringArray(R.array.arrSapXep);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(
                getActivity(),
                android.R.layout.simple_list_item_1,
                arrSapXep
        );
        listSapXep.setAdapter(adapter);

        btnHuy.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dialogSapXep.dismiss();
            }
        });
        btnAdpDung.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                xuLyApDungSapXep();
            }
        });


        dialogSapXep.show();



    }

    private void xuLyApDungSapXep() {

    }

    private void xuLyLoc() {
        final Dialog dialog = new Dialog(getActivity());
        dialog.setContentView(R.layout.dialog_loc);
        ListView lv=(ListView)dialog.findViewById(R.id.lvdlgloc);
        ArrayList<Model_listview_dlg> arr=new ArrayList<>();
        arr.add(new Model_listview_dlg("Danh mục","Tất cả"));
        arr.add(new Model_listview_dlg("Nhãn hiệu","Tất cả"));
        arr.add(new Model_listview_dlg("Gía","Tất cả"));
        arr.add(new Model_listview_dlg("Trạng thái","Tất cả"));
        ListviewAdapter lvListviewAdapter=new ListviewAdapter(getActivity(),arr);
        lv.setAdapter(lvListviewAdapter);



        Button dialogButton = (Button) dialog.findViewById(R.id.btn_huy_dlgloc);
        // if button is clicked, close the custom dialog
        dialogButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        dialog.show();

    }

    public class DepthPageTransformer implements ViewPager.PageTransformer {
        private static final float MIN_SCALE = 0.75f;

        public void transformPage(View view, float position) {
            int pageWidth = view.getWidth();

            if (position < -1) { // [-Infinity,-1)
                // This page is way off-screen to the left.
                view.setAlpha(0);

            } else if (position <= 0) { // [-1,0]
                // Use the default slide transition when moving to the left page
                view.setAlpha(1);
                view.setTranslationX(0);
                view.setScaleX(1);
                view.setScaleY(1);

            } else if (position <= 1) { // (0,1]
                // Fade the page out.
                view.setAlpha(1 - position);

                // Counteract the default slide transition
                view.setTranslationX(pageWidth * -position);

                // Scale the page down (between MIN_SCALE and 1)
                float scaleFactor = MIN_SCALE
                        + (1 - MIN_SCALE) * (1 - Math.abs(position));
                view.setScaleX(scaleFactor);
                view.setScaleY(scaleFactor);

            } else { // (1,+Infinity]
                // This page is way off-screen to the right.
                view.setAlpha(0);
            }
        }
    }

}
